const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://suraj:<password>@url-shortener-cluster.gh5rf5b.mongodb.net/?retryWrites=true&w=majority"
);
