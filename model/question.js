const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: { type: String, require },
  questionId: { type: String, require },
  quizId: { type: String, require },
  marks: { type: Number, require },
  option1: { type: String, require },
  option2: { type: String, require },
  option3: { type: String, require },
  option4: { type: String, require },
  option5: { type: String, require },
  answer: { type: String, require },
  course_id: { type: String, require },
});

const QuestionModel = mongoose.model("Question", questionSchema);
module.exports = QuestionModel;
