const urlValidation = require("../services/urlValidationSteps.js");

exports.urlShortner = (req) => {
  const url = req.body.url;

  let step1 = urlValidation.checkLength(url);

  if (step1) {
    console.log("generate url");
  } else {
    console.log("failed at step 1");
  }
  //step 2 - check suffix of url
};
