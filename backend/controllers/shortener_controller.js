const urlValidation = require("../services/urlValidationSteps.js");

exports.urlShortner = (req) => {
  const url = req.body.url;

  let basicValidation = urlValidation.checkLength(url);

  if (basicValidation) {
    console.log("generate url");
    urlValidation.prefixCheck(url);
  } else {
    console.log("failed basic url validation");
  }
  //step 2 - check suffix of url
};
