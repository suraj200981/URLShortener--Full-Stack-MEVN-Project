exports.findDot = (url) => {
  for (let i = 0; i < url.length; i++) {
    if (url[i] === ".") {
      return true;
    }
  }
};
