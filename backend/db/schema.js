const { model } = require("mongoose");

const UserSchema = require("./models/User");

const User = model("users", UserSchema);

module.exports = {
  User,
};
