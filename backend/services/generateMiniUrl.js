const suffixGenerator = require("random-string-alphanumeric-generator");

exports.generateNewUrl = (url) => {
  return "urlmini.io/" + suffixGenerator.randomAlphanumeric(5, "uppercase");
};
