const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  course_name: { type: String, require },
  course_id: { type: String, require },
  quiz: [],
  description: { type: String, require },
  made_by: { type: String, require },
});
const CourseModel = mongoose.model("course", courseSchema);

module.exports = CourseModel;
