require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Poll = new Schema({
  id: ObjectId,
  title: String,
  Questions: Object,
  endDate: Date,
});

const app = express();
app.use(bodyParser());

const server = app.listen(process.env.PORT || 3001, () => {
  console.log("Server listening on " + server.address().port);
});
