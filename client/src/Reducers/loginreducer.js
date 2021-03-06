export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "USER_LOGIN_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    default:
      return state;
  }
};
