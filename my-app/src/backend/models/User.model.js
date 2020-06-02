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
    level: { type: String, default: "staff" },
    created: { type: Date, default: Date.now }
})

UserSchema.index({ username: 1 }, { unique: true });

UserSchema.methods.CreateToken = async function() {
    const user = this;
    
    const payload = {
        id: user._id,
        level: user.level,
        username: user.username
    }
    const token = await jwt.sign(payload, 'dungishandsome');
    console.log(token);
    
    return token
}

const User = mongoose.model("users", UserSchema);
module.exports = User
