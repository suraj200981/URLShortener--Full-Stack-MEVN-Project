/*------------------Service imports----------------*/
const mongodbConnection = require("../util/database.js");

exports.getAllData  = (req, res) => {

    const short = "localhost:8081/"+req.params.data;
    const db = mongodbConnection.getDB();
    return db
      .collection("orignialurls")
      .findOne({ shortURL: short })
      .then((result) => {
        // console.log(result, " this is what is null");
        // console.log(result.clicks, " this is what is clicks");

        
        res.send(
            JSON.stringify({
              old_url: result.url,
              short_url: result.shortURL,
              createdBy: result.createdBy,
              clicks: result.clicks,
              ip: req.socket.localAddress
            })
          );
          res.redirect("/urlcounter");
      })
      .catch((err) => {
        console.log(err);
      });
  
};
