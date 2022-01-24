const express = require("express");
const db = require("./db");
const userRoute = require("./routes/userroute");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("this is working");
});
const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server is running on port", port));
