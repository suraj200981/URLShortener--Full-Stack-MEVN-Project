const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   urls: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Url",
  //     },
  //   ],
});

module.exports = mongoose.model("User", userSchema);

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//   }

//   save() {
//     const db = mongoose.connection;
//     return db
//       .collection("users")
//       .insertOne(this)
//       .then((result) => {
//         console.log(result);
//         return result;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static findById(userId) {
//     const db = mongoose.connection;
//     return db
//       .collection("users")
//       .findOne({ _id: new mongodb.ObjectId(userId) })
//       .then((result) => {
//         console.log(result);
//         return result;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }
// module.exports = User;
