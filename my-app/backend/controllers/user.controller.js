require("../db");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const register = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const user = new User(req.body);
    const token = jwt.sign(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "365d" }
    );

    user.activated_token = token;

    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS_EMAIL,
      },
    });

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: `${user.email}`,
      subject: `Hello ${user.username}. Welcom to our App`,
      text: `Thank you ${user.username} used and join to our app`,
      html: `
            <h1>Please use the following link to activate your account</h1>
            <p> localhost:8080/activation/${token} </p>
            <p>This email may contain sensetive information</p>
            <p>and link will  expired in 60 minutes</p>
        `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err + " ");
        return res.json({
          result: "error",
          message: err.message,
        });
      } else {
        console.log("Email sent: " + info.response);
        return res.json({
          result: "warning",
          message: `Email has been sent to ${user.email}. Follow the instruction to activate your account`,
        });
      }
    });
  } catch (err) {
    console.log(err + " ");
    res.json({ result: "error", message: err + " " });
  }
};

const login = async (req, res) => {
  const userNeedLog = new User(req.body);
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      throw new Error("Not found a user");
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      throw new Error("Invalid pass");
    }
    if (user.status === "not_activate") {
      throw new Error("Your need to activate account first");
    }
    const token = await user.CreateToken();

    res.json({ result: "success", token, message: "Login successfully" });
  } catch (e) {
    res.json({ result: "error", message: e + " " });
  }
};

const findUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
  } catch (e) {
    console.log(e + " ");
    res.status(500).send(e + " ");
  }
};

const uploadImage = async (files, user) => {
  if (files.avatars != null) {
    const fileExtention = files.avatars.name.split(".").pop();
    user.avatars = `${Date.now()}+${user.username}.${fileExtention}`;
    const newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + user.avatars;
    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(files.avatars.path, newpath);
    await User.findOneAndUpdate({ _id: user.id }, user);
  }
};

const updateProfile = async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, user, files) => {
      if (err) {
        throw new Error("No parse for Update");
      }
      await User.findOneAndUpdate({ _id: user.id }, user);
      await uploadImage(files, user);
      res.json({ result: "success", message: "Update Successfully" });
    });
  } catch (err) {
    res.json({ result: "error", message: err + " " });
  }
};

const active = async (req, res) => {
  const token = req.params.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        console.log("JWT VERIFY IN ACCOUNT ACTIVATION ERROR", err);
        return res.redirect("http://localhost:3000/login/error");
      }
    });
    let updatedFields = {
      status: "active",
      activated_token: "",
    };
    let doc = await User.findOneAndUpdate(
      { activated_token: token },
      updatedFields
    );
    return res.redirect("http://localhost:3000/login/success");
  }
};

const resetPassword = async (req, res) => {
  let expired_time = "60m";
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.json({
        result: "error",
        message: "User with that email does not exist",
      });
    }
    const token = jwt.sign(
      { _id: user._id, name: user.first_name },
      process.env.JWT_SECRET,
      {
        expiresIn: expired_time,
      }
    );

    user.updateOne({ resetPasswordToken: token }, (err, success) => {
      if (err) {
        console.log("RESET PASSWORD LINK ERROR", err);
        return res.status(400).json({
          result: "error",
          message: "Database connection error on user password forgot request",
        });
      } else {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASS_EMAIL,
          },
        });

        const mailOptions = {
          from: process.env.AUTH_EMAIL,
          to: email,
          subject: `Password Reset link`,
          html: `
                <h1>Please use the following link to reset your password</h1>
                <a href="http://localhost:8080/password-reset/${token}">Reset password link</a>
                <hr />
                <p>This link will expired in 60 minutes</p>
                
            `,
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (!error) {
            return res.json({
              result: "success",
              message: `Email has been sent to ${email}. Follow the instruction to activate your account`,
            });
          } else {
            return res.json({ result: "error", message: err.message });
          }
        });
      }
    });
  });
};

const putPassreset = async (req, res) => {
  const { password } = req.body;
  let resetPasswordToken = req.query.token;
  if (resetPasswordToken) {
    try {
      await jwt.verify(resetPasswordToken, process.env.JWT_SECRET);
      let encrypt_pass = await bcrypt.hash(password, 8);
      let updatedFields = {
        password: encrypt_pass,
        resetPasswordToken: "",
      };
      try {
        await User.findOneAndUpdate(
          { resetPasswordToken: resetPasswordToken },
          updatedFields
        );
        return res.json({
          result: "success",
          message: "Password update succesfully your can try login again",
        });
      } catch (e) {
        return res.json({
          result: "error",
          message: e + " ",
        });
      }
    } catch (err) {
      return res.json({
        result: "error",
        message: err + " ",
      });
    }
  } else {
    return res.json({
      result: "error",
      message: "No Found Token",
    });
  }
};

module.exports = {
  register,
  login,
  findUserByID,
  updateProfile,
  active,
  resetPassword,
  putPassreset,
};
