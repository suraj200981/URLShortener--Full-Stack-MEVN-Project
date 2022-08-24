/*------------------Service imports----------------*/
const mongodbConnection = require("../util/database.js");
const mockIPGen = require("../services/url data services/mockIPAddress.js");

exports.getAllData  = (req, res) => {

    const short = "localhost:8081/"+req.params.data;
    const db = mongodbConnection.getDB();
    return db
      .collection("orignialurls")
      .findOne({ shortURL: short })
      .then((result) => {
        res.send(
            JSON.stringify({
              old_url: result.url,
              short_url: result.shortURL,
              createdBy: result.createdBy,
              clicks: result.clicks,
              ip: mockIPGen.mockIPAddressGenerate()
            })
          );
          res.redirect("/urlcounter");
      })
      .catch((err) => {
        console.log(err);
      });
  
};
