const urlValidation = require('../services/urlValidation.js');

exports.urlShortner = (req) => {

  const url = req.body.url;



  let step1 = urlValidation.checkLength(url);

  if(step1) {
    let step2 = urlValidation.checkSuffix(url);
    if(step2) {
        console.log("can proceed to prefix check");
    }else{
        console.log("invalid url");
    }
      
  }else
  {
    console.log("invalid url");
  }
  //step 2 - check suffix of url
   

  };
