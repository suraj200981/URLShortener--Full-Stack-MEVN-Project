const mongodbConnection = require("../../util/database.js");

exports.RedirectToOriginal = (orginalUrl, res) => {
  const db = mongodbConnection.getDB();
  return db
    .collection("orignialurls")
    .findOne({ shortURL: orginalUrl })
    .then((result) => {
      console.log(result);
      console.log("Redirecting to: ", result.url);
      //redirect to external url
      res.redirect(result.url);
    })
    .catch((err) => {
      console.log(err);
    });
};
