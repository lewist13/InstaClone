const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    caption: String,
    user: String,
    image: String,
    comments: [],
  },
  { timestamps: true }
);
