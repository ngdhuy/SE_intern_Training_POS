const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "daoadung1@gmail.com",
    pass: "Hoanganhdung99",
  },
});

const mailOptions = {
  from: "daoadung1@gmail.com@gmail.com",
  to: "daoadung69@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
