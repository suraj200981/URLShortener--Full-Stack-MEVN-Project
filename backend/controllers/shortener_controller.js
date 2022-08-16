
const urlValidation = require("../services/urlValidationSteps.js");
const generateUrl = require("../services/generateMiniUrl.js");

var variable = require("../vars/urlStore.js");

exports.urlShortner = (req,res) => {
  const url = req.body.url;

  let basicValidation = urlValidation.checkLength(url);

  if (basicValidation) {
    console.log("generate url");
    urlValidation.prefixCheck(url);
    let generatedURL = generateUrl.generateNewUrl(url);

    variable.originalURL = url;
    res.send(`${variable.originalURL}`);

    
  } else {
    res.send(`failed to generate url`);
  }
};
