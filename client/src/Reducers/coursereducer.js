export const courseReducer = (state = {}, action) => {
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
