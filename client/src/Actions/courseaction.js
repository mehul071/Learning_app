import axios from "axios";

export const addcourse = (NewCourse) => async (dispatch) => {
  dispatch({ type: "NEW_COURSE_REQUEST" });
  try {
    const response = await axios.post("/api/users/addcourse", NewCourse);
    dispatch({ type: "NEW_COURSE_SUCCESS" });
  } catch (error) {
    dispatch({ type: "NEW_COURSE_FAILED", payload: error });
  }
};

export const getallcourse = () => async (dispatch) => {
  dispatch({ type: "GET_COURSES_REQUEST" });
  try {
    const response = await axios.get("/api/users/getallcourses");
    console.log(response);
    dispatch({ type: "GET_COURSES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_COURSES_FAILED", payload: error });
  }
};