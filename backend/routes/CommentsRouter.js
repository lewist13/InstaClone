const Router = require("express").Router();
const CommentsController = require("../controllers/CommentController");

Router.post("/:post_id/user/:user_id", CommentsController.CreateComment);
Router.delete("/:post_id/remove/:comment_id", CommentsController.RemoveComment);
Router.put("/:comment_id", CommentsController.UpdateComment);

module.exports = Router;
