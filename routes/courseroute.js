const express = require("express");
const router = express.Router();
const Newcourse = require("../modules/course.js");
const { v4: uuidv4 } = require("uuid");

router.post("/addcourse", (req, res) => {
  const { course_name, description, made_by } = req.body;
  const course = new Newcourse({
    course_name,
    course_id: uuidv4(),
    description,
    made_by,
  });
  try {
    course.save();
    res.send("Couse Successfully added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/getallcourses", async (req, res) => {
  try {
    const courses = await Newcourse.find({});
    res.send(courses);
  } catch (error) {
    return res.send(400).json({ message: error });
  }
});

module.exports = router;
