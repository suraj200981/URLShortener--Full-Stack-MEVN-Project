
exports.getLogin = (req, res) => {
  
};

exports.postLogin = (req, res) => {
    req.isLoggedIn = true;
    res.redirect("/");
};
