const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required },
  email: { type: String, required },
  password: { type: String, required },
  role: { type: String, required },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
