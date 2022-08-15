exports.prefixInspection = (url) => {
  if (url.startsWith("http://")) {
    let prefix = url.substring(0, 7);
    return prefix;
  } else if (url.startsWith("https://")) {
    let prefix = url.substring(0, 8);
    return prefix;
  } else {
    return "false";
  }
};
