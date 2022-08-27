const suffixGenerator = require("random-string-alphanumeric-generator");
const Url = require("../models/Url.js");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

exports.generateNewUrl = (url, prefix, req) => {
  //create a new url object
  const urlModel = new Url(
    prefix + url,
    "localhost:8081/" + suffixGenerator.randomAlphanumeric(5, "uppercase"),
    0,
    [],
    null
  );
  //save the url object to the database
  return urlModel.save();
  // urlModel.save();
  // return urlModel;
};
