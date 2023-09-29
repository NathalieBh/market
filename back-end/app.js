const bodyPerser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(bodyPerser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.PASSWORD_MONGODB}@cluster0.ybifg1p.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
  )
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log(`Listen on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
