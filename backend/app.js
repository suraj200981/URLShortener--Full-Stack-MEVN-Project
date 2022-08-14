/********************Module imports **************************/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//importing routes
const shortenerRoute = require("./routes/shortener_route.js");

app.use(bodyParser.urlencoded());

//setting up routes
// "/shortener" is the base url for the shortener route
app.use("/api", shortenerRoute);

app.listen(8080);
console.log("Server is running on port 8080");
