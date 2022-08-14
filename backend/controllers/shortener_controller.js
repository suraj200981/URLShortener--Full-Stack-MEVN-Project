exports.urlShortner = (req, res) => {

  const url = req.body.url;

  //step 1 - check prefix of url
  //regular expression to check if at least one character is present followed by a dot
  const regex = /^[a-zA-Z0-9]*\.[a-zA-Z0-9]*$/;
  if (!regex.test(url)) {
    console.log("invaild url");

    }else{
      console.log(url, "is vaild");

    }
  };
