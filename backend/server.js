const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Pusher = require("pusher");
const connection = require("./db/connection");

// app config
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api routes
app.get("/", (req, res) => res.status(200).send("yoooo it works"));
app.post("/upload", (req, res) => {});

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
