const dotFinder = require("./findDot.js");
const checkPrefix = require("./prefixCheck.js");

exports.checkLength = (url) => {
  if (url.length >= 2) {
    if (dotFinder.findDot(url)) {
      return true;
    }
  } else {
    return false;
  }
};

exports.prefixCheck = (url) => {
  if (checkPrefix.prefixInspection(url) == "false") {
    return false;
  } else if (checkPrefix.prefixInspection(url) == "http://") {
    console.log("correct prefix found");
    return true;
  } else if (checkPrefix.prefixInspection(url) == "https://") {
    console.log("correct prefix found and secure");
    return true;
  }
};
