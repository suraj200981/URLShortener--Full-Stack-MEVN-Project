/********************Module imports **************************/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//importing routes
const shortenerRoute = require("./routes/shortener_route.js");

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/mini');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(cors());


app.use(bodyParser.json());


//setting up routes
// "/shortener" is the base url for the shortener route
app.use("/api", shortenerRoute);



app.listen(8081);
console.log("Server is running on port localhost:8081");
