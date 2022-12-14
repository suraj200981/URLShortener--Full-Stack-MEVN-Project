const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  orignialURL: {
    type: String,
  },
  shortURL: {
    type: String,
  },
  clicks: {
    type: Number,
  },
  ip: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Url", UrlSchema);
