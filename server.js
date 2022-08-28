import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Data from "./Data.js";
import Videos from "./dbModel.js";

//app config
const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(Cors());

//db config
const connection_url =
  "mongodb+srv://admin:DragonMaster786@cluster0.zzaa4zq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url);

//API endpoints
app.get("/", (req, res) =>
  res.status(200).send("hello mr. world, from Rohni B0$$")
);

app.get("/localrepo/videos", (req, res) => res.status(200).send(Data));

app.get("/repo/videos", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/repo/videos", (req, res) => {
  const videosDB = req.body;
  Videos.create(videosDB, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log(`listening on the localhost: ${port}`));
