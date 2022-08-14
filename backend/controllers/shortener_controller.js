const urlValidation = require('../services/urlValidation.js');

exports.urlShortner = (req, res) => {

  const url = req.body.url;



  //step 1 - check prefix of url
  //regular expression to check if at least one character is present followed by a dot
  urlValidation.checkLength(url);
  
  };
