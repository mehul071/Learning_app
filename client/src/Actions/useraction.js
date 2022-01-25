import axios from "axios";

export const StudentLogin = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/studentlogin", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("current_user", JSON.stringify(response.data));
    window.location.href = "/studentscreen";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};
export const TeacherLogin = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/teacherlogin", user);
    dispatch({ type: "USER_LOGIN_SUCCESS" });
    window.location.href = "/teacherscreen";
    localStorage.setItem("current_user", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};
export const TeacherRegister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = axios.post("/api/users/teacherregister", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
    window.location.href = "/teacherscreen";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const StudentRegister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await axios.post("/api/users/studentregister", user);
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    window.location.href = "/studentscreen";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const logoutuser = () => (dispatch) => {
  if (localStorage.getItem("current_user"))
    localStorage.removeItem("current_user");
};
