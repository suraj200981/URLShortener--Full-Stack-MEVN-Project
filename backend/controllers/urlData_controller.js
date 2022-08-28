/*------------------ imports----------------*/
const mongoose = require("mongoose");

exports.getAllData = (req, res) => {
  const short = "localhost:8081/" + req.params.data;
  const db = mongoose.connection;
  return db
    .collection("urls")
    .findOne({ shortURL: short })
    .then((result) => {
      console.log(result, "on get call in url count");
      res.send(
        JSON.stringify({
          old_url: result.orignialURL,
          short_url: result.shortURL,
          // createdBy: result.createdBy,
          clicks: result.clicks,
          ip: result.ip, //mockIPGen.mockIPAddressGenerate()
        })
      );
      res.redirect("/urlcounter");
    })
    .catch((err) => {
      console.log(err);
    });
};
