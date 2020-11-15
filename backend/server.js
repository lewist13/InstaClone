const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Pusher = require("pusher");
const connection = require("./db/connection");
const User = require("./db/models/User");
const { post } = require("./db/models/User");

// app config
const PORT = process.env.PORT || 3001;
const app = express();

const pusher = new Pusher({
  appId: "1107606",
  key: "c1fc82a16b29639631a6",
  secret: "d62e0950f7de5677bd52",
  cluster: "us2",
  useTLS: true,
});
// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connection.once("open", () => {
  const changeStream = mongoose.connection.collection("posts").watch();
  changeStream.on("change", (change) => {
    console.log("CHS Triggered on pusher...");
    console.log(change);
    console.log("End of Change");

    if (change.operationType === "insert") {
      console.log("Triggering Pusher IMG UPLOAD");

      const postDetails = change.fullDocument;
      pusher.trigger("posts", "inserted", {
        user: postDetails.user,
        caption: postDetails.caption,
        image: postDetails.image,
      });
    } else {
      console.log("Unknown Trigger");
    }
  });
});

// api routes
app.get("/", (req, res) => res.status(200).send("yoooo it works"));
app.post("/upload", (req, res) => {
  const body = req.body;
  User.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/sync", (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// listen
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
    console.log(`App listening on port: ${PORT}`);
  } catch (error) {
    throw new Error("Connection Error");
  }
});
