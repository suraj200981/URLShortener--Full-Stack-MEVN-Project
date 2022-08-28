const urlValidation = require("../services/urlValidationSteps.js");
const generateUrl = require("../services/generateMiniUrl.js");

var variable = require("../vars/urlStore.js");

exports.urlShortner = (req, res) => {
  const url = req.body.url;
  let basicValidation = urlValidation.checkLength(url);

  if (basicValidation) {
    console.log("generate url");

    if (urlValidation.prefixCheck(url)) {
      generatedURL = generateUrl.generateNewUrl(url, "");
    } else {
      generatedURL = generateUrl.generateNewUrl(url, "http://");
    }
    variable.orignialURL = generatedURL.orignialURL;
    //send variable in json format
    res.send(
      JSON.stringify({
        orignialURL: variable.orignialURL,
        shortURL: generatedURL.shortURL,
      })
    );
  } else {
    return res.status(400).send({
      message: "This is an error!",
    });
  }
};
