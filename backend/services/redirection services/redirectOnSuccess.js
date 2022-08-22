const mongodbConnection = require("../../util/database.js");

exports.RedirectToOriginal = (orginalUrl, res) => {
  const db = mongodbConnection.getDB();
  return db
    .collection("orignialurls")
    .findOne({ shortURL: orginalUrl })
    .then((result) => {
      console.log(result);
      console.log("Redirecting to: ", result.url);
      return db.collection("orignialurls").updateOne({ shortURL: orginalUrl }, { $set: { clicks: result.clicks+1 } }).then
      (result2 => {
         //redirect to external url
        res.redirect(result.url);
        console.log(result2);
      }).catch(err => {
        console.log(err);
      })
    
    })
    .catch((err) => {
      console.log(err);
    });
};
