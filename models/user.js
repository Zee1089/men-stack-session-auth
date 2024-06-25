const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true, //database validation, in order for a user doc to be cerated there has to be a value for this key.
    },
  });

const User = mongoose.model("User", userSchema);
module.exports = User;