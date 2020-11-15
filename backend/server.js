import express from "express";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Pusher from "pusher";

// app config
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// db config

// api routes
app.get("/", (req, res) => res.status(200).send("yoooo it works"));

// listen
app.listen(PORT, async () => {
  try {
    console.log("Database Connected");
    console.log(`App listening on port: ${PORT}`);
  } catch (error) {
    throw new Error("Connection Error");
  }
});
