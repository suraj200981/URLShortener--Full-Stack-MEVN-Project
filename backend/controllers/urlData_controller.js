/*------------------Service imports----------------*/
const mongodbConnection = require("../util/database.js");

exports.getAllData  = (req, res) => {

    const orginalUrl = req.params.data;
    console.log(orginalUrl,"found it");


    const db = mongodbConnection.getDB();
    return db
      .collection("orignialurls")
      .findOne({ url: orginalUrl })
      .then((result) => {
        console.log(result, " this is what is null");
        console.log()
        res.send(
            JSON.stringify({
              old_url: result.url,
              short_url: result.shortURL,
              createdBy: result.createdBy,
              clicks: result.clicks,
            })
          );
      })
      .catch((err) => {
        console.log(err);
      });
  
};
