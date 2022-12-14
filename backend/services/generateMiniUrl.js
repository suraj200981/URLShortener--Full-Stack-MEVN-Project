const suffixGenerator = require("random-string-alphanumeric-generator");
const Url = require("../models/Url.js");

exports.generateNewUrl = (url, prefix, req) => {
  //create a new url object
  const urlModel = new Url({
    orignialURL: String(prefix) + String(url),
    shortURL:
      "localhost:8081/" + suffixGenerator.randomAlphanumeric(5, "uppercase"),
    clicks: 0,
    ip: [],
    createdAt: new Date(),
    userId: req.user._id,
  });
  //save the url object to the database
  urlModel.save();
  return urlModel;
};
