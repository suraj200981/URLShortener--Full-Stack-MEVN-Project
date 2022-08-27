const suffixGenerator = require("random-string-alphanumeric-generator");
const Url = require("../models/Url.js");

exports.generateNewUrl = (url, prefix, req) => {
  //create a new url object
  const urlModel = new Url(
    prefix + url,
    "localhost:8081/" + suffixGenerator.randomAlphanumeric(5, "uppercase"),
    0,
    [],
    req.user._id
  );
  urlModel.save();
  return urlModel.shortURL;
};
