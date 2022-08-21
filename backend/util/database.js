const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;
exports.mongodbConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://suraj:zT68UF5NqqklYjAo@url-shortener-cluster.gh5rf5b.mongodb.net/urlshortener?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("Connected to MongoDB");
      _db = result.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDB = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};
