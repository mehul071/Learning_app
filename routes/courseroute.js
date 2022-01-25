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
    return res.status(400).json({ message: error });
  }
});

router.post("/getbyid", async (req, res) => {
  var course_id = req.body.id.courseid;
  // console.log(course_id);
  try {
    const course = await Newcourse.findOne({ course_id });
    res.send(course);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/update", async (req, res) => {
  const { course_name, description } = req.body;
  var course_id = req.body.id.courseid;
  // console.log(id);
  try {
    const response = await Newcourse.findOne({
      course_id,
    });
    console.log(response);
    response.course_name = course_name;
    response.description = description;
    response.save();
    res.send("Successfully updated");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
