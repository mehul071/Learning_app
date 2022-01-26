const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: { type: String, requrire },
  questionId: { type: String, require },
  quizId: { type: String, require },
  marks: { type: Number, require },
  option1: { type: String, require },
  option2: { type: String, require },
  option3: { type: String, require },
  option4: { type: String, require },
  option5: { type: String, require },
  correctOption: [],
});

const QuestionModel = mongoose.model("question", questionSchema);
module.exports = QuestionModel;
