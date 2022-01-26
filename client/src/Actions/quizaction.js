import axios from "axios";

export const addquestion = (question = async (dispatch) => {
  dispatch({ type: "NEW_QUESTION_REQUEST" });
  try {
    const response = await axios.post("/api/quiz/addquestion", question);
    dispatch({ type: "NEW_QUESTION_SUCCESS" });
  } catch (error) {
    dispatch({ type: "NEW_QUESTION_FAILED" });
  }
});
