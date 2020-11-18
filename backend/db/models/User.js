const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    caption: String,
    image: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    comments: {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  },
  { timestamps: true }
);
