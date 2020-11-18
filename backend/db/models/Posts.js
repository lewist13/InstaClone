const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    caption: String,
    postId: String,
    image: String,
    comments: {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  },
  { timestamps: true }
);
