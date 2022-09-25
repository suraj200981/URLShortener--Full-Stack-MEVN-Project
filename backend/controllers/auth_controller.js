
// exports.getLogin = (req, res) => {
//     console.log("in the login controller GET")

// };

exports.postLogin = (req, res) => {
    

    console.log("in the login controller POST")
    console.log(req.body, "heres what i got :)")
    //set cookie for login

    return res.redirect("http://localhost:8080/")
};
