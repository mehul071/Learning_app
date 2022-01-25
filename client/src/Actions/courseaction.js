import axios from "axios";

export const addcourse = (NewCourse) => async (dispatch) => {
  dispatch({ type: "NEW_COURSE_REQUEST" });
  try {
    const response = await axios.post("/api/addcourse", NewCourse);
    dispatch({ type: "NEW_COURSE_SUCCESS" });
  } catch (error) {
    dispatch({ type: "NEW_COURSE_FAILED", payload: error });
  }
};
