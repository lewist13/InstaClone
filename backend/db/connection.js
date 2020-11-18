const mongoose = require("mongoose");

const connection =
  "mongodb+srv://matic:itvCu819cDqb79KM@instaclone.vu2tt.mongodb.net/instaclone?retryWrites=true&w=majority";

mongoose.connect(connection, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.set("debug", true);
module.exports = connection;
