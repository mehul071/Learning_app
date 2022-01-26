const express = require("express");
const router = express.Router();
const quiz = require("../model/quiz");
const course = require("../model/course");

router.post("/createquiz", async (req, res) => {
  const { quiz_id, Quizname } = req.body;
  var course_id = req.body.id.courseid;
  const NewQuiz = new quiz({ Quizname, course_id, quiz_id });
  try {
    NewQuiz.save();
    res.send("NewQuiz");
    const response = await course.findOne({ course_id });
    response.quiz.push(quiz_id);
    response.save();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getquizid", async (req, res) => {
  var course_id = req.body.id.courseid;
  try {
    const quiz_id = await quiz.find({ course_id });
    res.send(quiz_id);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
