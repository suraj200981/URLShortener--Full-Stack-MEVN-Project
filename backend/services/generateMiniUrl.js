const suffixGenerator = require("random-string-alphanumeric-generator");
const Url = require("../models/Url.js");
const requestIp = require('request-ip');

exports.generateNewUrl = (url, prefix, req) => {
  //create a new url object
  const urlModel = new Url(
    prefix + url,
    "localhost:8081/" + suffixGenerator.randomAlphanumeric(5, "uppercase"),
    "",
    0,
    requestIp.getClientIp(req)
  );
  urlModel.save();
  return urlModel.shortURL;
};
