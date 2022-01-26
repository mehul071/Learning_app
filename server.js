const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const questionRoute = require("./routes/questionroute");
const courseRoute = require("./routes/courseroute");
const userRoute = require("./routes/userroute");
const quizRoute = require("./routes/quizroutes");

app.use("/api/question/", questionRoute);
app.use("/api/quiz/", quizRoute);
app.use("/api/course/", courseRoute);
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("this is working");
});
const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server is running on port", port));
