const mongodbConnection = require("../util/database.js");
const url = require("url");

exports.checkShortUrl = (req, res) => {
  const gencode = req.params.generatedCode;
  const orginalUrl = req.get("host") + req.url;
  if (gencode.length == 5) {
    //proceed to check if the code is in the database
    console.log(gencode, "is a valid code");

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
  } else {
    //404 error
    console.log(gencode, "incorrect code");
  }
};
