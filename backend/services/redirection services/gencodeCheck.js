const redirection = require("./redirectOnSuccess.js");

exports.generationCheck = (code, orginalUrl, res) => {
  if (code.length == 5) {
    //proceed to check if the code is in the database
    console.log(code, "is a valid code");
    redirection.RedirectToOriginal(orginalUrl, res);
  } else {
    //404 error
    console.log(code, "incorrect code");
  }
};
