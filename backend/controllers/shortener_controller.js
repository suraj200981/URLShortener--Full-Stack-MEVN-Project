exports.urlShortner = (req, res) => {
  const url = req.body.url;
  if (url == "" || url == null || url == undefined || url == " ") {
    console.log("invaild url");
  } else {
    console.log(url, "is vaild");
  }
};
