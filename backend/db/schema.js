const { model } = require("mongoose");

const UserSchema = require("./models/User");
const PostsSchema = require("./models/Posts");
const CommentsSchema = require("./models/Comments");

const User = model("users", UserSchema);
const Posts = model("posts", PostsSchema);
const Comments = model("comment", CommentsSchema);

module.exports = {
  User,
  Posts,
  Comments,
};
