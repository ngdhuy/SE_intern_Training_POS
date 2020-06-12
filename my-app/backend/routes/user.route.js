const express = require("express");
const UserRoute = new express.Router();
const {
  register,
  login,
  findUserByID,
  updateProfile,
  active,
  resetPassword,
  putPassreset,
} = require("../controllers/user.controller");

UserRoute.post("/register", register);
UserRoute.post("/login", login);
UserRoute.get("/profile/id/:id", findUserByID);
UserRoute.put("/profile", updateProfile);
UserRoute.get("/activation/:token", active);
UserRoute.post("/password/reset", resetPassword);
UserRoute.put("/password/reset", putPassreset);

module.exports = UserRoute;
