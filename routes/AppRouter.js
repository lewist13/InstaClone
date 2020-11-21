const Router = require("express").Router();

const UserRouter = require("./UserRouter");
const CommentsRouter = require("./CommentsRouter");
const PostsRouter = require("./PostsRouter");

Router.use("/users", UserRouter);
Router.use("/posts", PostsRouter);
Router.use("/comments", CommentsRouter);

module.exports = Router;
