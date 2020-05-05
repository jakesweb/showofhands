require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());

const server = app.listen(process.env.PORT || 3001, () => {
  console.log("Server listening on " + server.address().port);
});
