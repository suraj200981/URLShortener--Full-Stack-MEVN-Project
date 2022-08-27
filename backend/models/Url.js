const mongodbConnection = require("../util/database.js");

class Url {
  constructor(url, shortURL, clicks, ip, createdBy) {
    this.url = url;
    this.shortURL = shortURL;
    this.clicks = clicks;
    this.ip = ip;
    this.createdBy = createdBy;
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
