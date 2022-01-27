export const AddcourseReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW_COURSE_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "NEW_COURSE_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "NEW_COURSE_SUCCESS":
      return {
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};
export const getcourseReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_COURSES_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_COURSES_FAILED":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "GET_COURSES_SUCCESS":
      return {
        loading: false,
        success: true,
        courses: action.payload,
      };
    default:
      return state;
  }
};
