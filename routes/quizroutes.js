const express = require("express");
const router = express.Router();
const quiz = require("../model/quiz");

router.post("/createquiz", async (req, res) => {
  const { quiz_id, Quizname } = req.body;
  var course_id = req.body.id.courseid;
  const NewQuiz = new quiz({ Quizname, course_id, quiz_id });
  try {
    NewQuiz.save();
    res.send("NewQuiz");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addquestion", async (req, res) => {});

module.exports = router;
