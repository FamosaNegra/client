const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;