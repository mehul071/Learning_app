const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://mehul720:mehul@learningplatform.ntsgz.mongodb.net/learningsystem";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewURLParser: true });

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Connetion Done");
});

db.on("error", () => {
  console.log("error");
});
module.exports = mongoose;
