const express = require("express");
const router = express.Router();
const Newcourse = require("../modules/course.js");

router.post("/addcourse", (req, res) => {
  const { course_name, description, made_by } = req.body;
  const course = new Newcourse({ course_name, description, made_by });
  try {
    course.save();
    res.send("Couse Successfully added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
