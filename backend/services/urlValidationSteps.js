const dotFinder = require("./findDot.js");

exports.checkLength = (url) => {
  if (url.length >= 2) {
    if (dotFinder.findDot(url)) {
      return true;
    }
  } else {
    return false;
  }
};
