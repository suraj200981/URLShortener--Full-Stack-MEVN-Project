const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  orignialURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
  ip: {
    type: Array,
    required: true,
  },
  // createdBy: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

module.exports = mongoose.model("Url", UrlSchema);
