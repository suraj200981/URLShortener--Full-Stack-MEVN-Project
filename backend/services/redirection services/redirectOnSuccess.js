const mongoose = require("mongoose");
const mockIPGen = require("../../services/url data services/mockIPAddress.js");

exports.RedirectToOriginal = (orginalUrl, res) => {
  const db = mongoose.connection;
  return db
    .collection("orignialurls")
    .findOne({ shortURL: orginalUrl })
    .then((result) => {
      console.log(result);
      console.log("Redirecting to: ", result.url);
      console.log("array: ", result.ip);
      return db
        .collection("orignialurls")
        .updateOne(
          { shortURL: orginalUrl },
          {
            $push: {
              ip: mockIPGen.mockIPAddressGenerate(),
            },
            $set: {
              clicks: result.clicks + 1,
            },
          }
        )
        .then((result2) => {
          //redirect to external url
          res.redirect(result.url);
          console.log(result2);
        })
        .catch((err) => {
          console.log(err);
        });
    });
};
