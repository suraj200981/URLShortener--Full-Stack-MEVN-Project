const mongodbConnection = require("../util/database.js");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = mongodbConnection.getDB();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findUser(username) {
    const db = mongodbConnection.getDB();
    return db
      .collection("users")
      .findOne({ username: username })
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
