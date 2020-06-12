const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
  avatars: String,
  username: String,
  email: String,
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  password: String,
  status: { type: String, default: "not_activate" },
  activated_token: { type: String, default: "" },
  resetPasswordToken: { type: String, default: "" },
  level: { type: String, default: "staff" },
  created: { type: Date, default: Date.now },
});

UserSchema.index({ username: 1 }, { unique: true });

UserSchema.methods.CreateToken = async function() {
    const user = this;
    
    const payload = {
        id: user._id,
        level: user.level,
        username: user.username
    }
    const token = await jwt.sign(payload, process.env.JWT_SECRET);
    console.log(token);
    return token
}

// Hidden infor before send back to client
UserSchema.methods.toJSON = function() {
    const user = this;
    const objectUser = user.toObject();
    delete objectUser.activated_token;
    delete objectUser.password;
    return objectUser;
}

const User = mongoose.model("users", UserSchema);
module.exports = User
