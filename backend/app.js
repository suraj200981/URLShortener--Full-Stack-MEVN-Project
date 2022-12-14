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
const authRoute = require("./routes/auth_route.js");

app.use(cors());
//enable cross origin requests

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

var originsWhitelist = [
  'http://localhost:8080/'     //this is my front-end url for development

];
var corsOptions = {
  origin: function(origin, callback){
        console.log(origin);
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        console.log(isWhitelisted);
        callback(null, isWhitelisted);
  },
  credentials:true
}
app.options('*', cors(corsOptions));


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
app.use("/api",authRoute)
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
