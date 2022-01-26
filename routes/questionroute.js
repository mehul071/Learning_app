const express = require("express");
const router = express.Router();
const NewQuestion = require("../model/question");

router.post("/addquestion", (req, res) => {
  const {
    question,
    questionId,
    quizId,
    marks,
    option1,
    option2,
    option3,
    option4,
    option5,
    answer,
  } = req.body;
  var course_id = req.body.id.courseid;
  // console.log(courseid);
  const newquestion = new NewQuestion({
    question,
    questionId,
    quizId,
    marks,
    option1,
    option2,
    option3,
    option4,
    option5,
    answer,
    course_id,
  });
  try {
    newquestion.save();
    res.send("question created");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
