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

router.post("/getallquestions", async (req, res) => {
  var course_id = req.body.id.courseid;
  console.log(course_id);
  try {
    const response = await NewQuestion.find({ course_id: course_id });
    res.send(response);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getallques", async (req, res) => {
  var course_id = req.body.id.courseid;
  // console.log(course_id);
  try {
    const response = await NewQuestion.find({ course_id });
    res.send(response);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getanswer", async (req, res) => {
  const { questionId } = req.body;
  try {
    const response = await NewQuestion.find({ questionId });
    console.log();
    res.send(response[0].answer);
  } catch (error) {}
});
module.exports = router;
