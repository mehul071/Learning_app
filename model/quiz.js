const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  Quizname: { type: String, require },
  course_id: { type: String, require },
  quiz_id: { type: String, require },
  passingMarks: { type: Number, require },
});

const QuizModel = mongoose.model("Quiz", quizSchema);
module.exports = QuizModel;
