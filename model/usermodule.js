const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
  role: { type: String, require },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
