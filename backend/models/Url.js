const mongodbConnection = require("../util/database.js");

class Url {
  constructor(url, shortURL, createdBy, clicks,ip) {
    this.url = url;
    this.shortURL = shortURL;
    this.createdBy = createdBy;
    this.clicks = clicks;
    this.ip = ip;
  }

  save() {
    const db = mongodbConnection.getDB();
    return db
      .collection("orignialurls")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findOrginalUrl(shortURL) {
    const db = mongodbConnection.getDB();
    return db
      .collection("orignialurls")
      .findOne({ shortURL: shortURL })
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = Url;
