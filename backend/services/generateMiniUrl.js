const suffixGenerator = require("random-string-alphanumeric-generator");
const Url = require("../models/Url.js");
exports.generateNewUrl = (url) => {
  //create a new url object
  const urlModel = new Url(
    url,
    "localhost:8081/" + suffixGenerator.randomAlphanumeric(5, "uppercase"),
    ""
  );
  urlModel.save();
  return urlModel.shortURL;
};
