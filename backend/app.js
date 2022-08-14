/********************Module imports **************************/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//importing routes
const shortenerRoute = require("./routes/shortener_route.js");

app.use(bodyParser.json());
app.use(cors());

//setting up routes
// "/shortener" is the base url for the shortener route
app.use("/api", shortenerRoute);

app.listen(8081);
console.log("Server is running on port localhost:8081");
