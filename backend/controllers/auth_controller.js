
/*------------------ imports----------------*/
const mongoose = require("mongoose");

exports.postLogin = (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    res.header("Access-Control-Allow-Credentials", "true");
    
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    }
  
    // console.log("in the login controller POST")
    console.log(req.body, "heres what i got :)")

 
    if(req.body.username == "s" && req.body.email == "s"){
        console.log("login successful")
        return res.redirect("http://localhost:8080/",200);

    }


};
