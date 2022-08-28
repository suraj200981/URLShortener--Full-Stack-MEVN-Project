const url = require("url");
/*------------------Service imports----------------*/
const validateURL = require("../services/redirection services/gencodeCheck.js");

exports.checkShortUrl = (req, res) => {
  const gencode = req.params.generatedCode;
  const orginalUrl = req.get("host") + req.url;
  console.log(orginalUrl, "is the orginal url");

  validateURL.generationCheck(gencode, orginalUrl, res);
};
