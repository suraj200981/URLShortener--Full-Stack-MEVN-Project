exports.checkShortUrl = (req, res) => {
  const gencode = req.params.gencode;

  console.log(gencode);
  //   const db = mongodbConnection.getDB();
  //   return db
  //     .collection("orignialurls")
  //     .findOne({ shortURL: shortUrl })
  //     .then((result) => {
  //       console.log(result);
  //       return result;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};
