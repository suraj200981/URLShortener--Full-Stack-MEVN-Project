/********************Module imports **************************/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//import mongoose
const mongoose = require("mongoose");

//model imports
const User = require("./models/User.js");

//importing routes
const shortenerRoute = require("./routes/shortener_route.js");
const redirectRoute = require("./routes/redirect_route.js");
const urlDataRoute = require("./routes/urlData_route.js");

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
  User.findById("630a1890c62cc1242c9dbe55")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

//setting up routes
app.use("/data", urlDataRoute);

// "/shortener" is the base url for the shortener route
app.use("/api", shortenerRoute);
app.use(redirectRoute);

mongoose
  .connect(
    "mongodb+srv://suraj:Zo6Jkk2oL45tNPby@url-shortener-cluster.gh5rf5b.mongodb.net/urlshortener?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(8081);
    console.log("Server is running on port localhost:8081");
  })
  .catch((err) => {
    console.log(err);
  });
