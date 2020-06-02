require('../db')
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const formidable = require("formidable");
const path = require('path')
const fs = require("fs-extra")

const register = async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 8);
      const user = new User(req.body)
      await user.save();
      res.json({ result: "success", message: "Register successfully" });
    } catch (err) {
      res.json({ result: "error", message: err + ' '});
    }
  }

const login = async (req, res) => {

    const userNeedLog = new User(req.body)
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) {
            throw new Error('Not found a user');
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) {
            throw new Error('Invalid pass');
        }
        const token = await user.CreateToken()
        
        res.json({ result: "success", token, message: "Login successfully" });
    } catch (e) {
        res.json({ result: "error", message: e + ' '});
    }
  }

const findUserByID = async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    res.json(user)
  } catch (e) {
    console.log(e + ' ');
  }
}

const uploadImage = async (files, user) => {
  console.log(files);
  
  if (files.avatars != null) {
    const fileExtention = files.avatars.name.split(".").pop();
    user.avatars = `${Date.now()}+${user.username}.${fileExtention}`;
    const newpath =
      
      path.resolve(__dirname + "/uploaded/images/") + "/" + user.avatars;
      // 'F:/GOCHOCTAP/TrainingWeb/POS/my-app/public/img' + "/" + user.avatars;
    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(files.avatars.path, newpath);
    await User.findOneAndUpdate({ _id: user.id }, user);
  }
};

const updateProfile = async (req, res) => {
  try {
      var form = new formidable.IncomingForm()
      form.parse(req, async (err, user, files) => {
        if(err) {
          throw new Error('No parse for Update')
        }
        await User.findOneAndUpdate({ _id: user.id }, user)
        await uploadImage(files, user)
        res.json({ result: "success", message: "Update Successfully" })
    })
  } catch (err) {
    res.json({ result: "error", message: err + ' '})
  }
}
  

  module.exports = {
      register,
      login,
      findUserByID,
      updateProfile
  }