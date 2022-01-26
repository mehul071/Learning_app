import axios from "axios";

export const addquestions = (question) => async (dispatch) => {
  dispatch({ type: "NEW_QUESTION_REQUEST" });
  try {
    const response = await axios.post("/api/question/addquestion", question);
    console.log(response);
    dispatch({ type: "NEW_QUESTION_SUCCESS" });
  } catch (error) {
    dispatch({ type: "NEW_QUESTION_FAILED", payload: error });
  }
};
