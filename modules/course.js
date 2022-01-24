const mongoose = require("mongoose");

const courseSchema = monoose.Schema({
  course_name: { type: String, require },
  course_id: { type: Number, require },
  description: { type: String, require },
  madeby: { type: String, require },
});
const CourseModel = mongoose.model("course", courseSchema);

module.exports = CourseModel;
