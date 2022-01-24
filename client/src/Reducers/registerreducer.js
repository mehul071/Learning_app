export const RegisterUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loadin: false,
        success: true,
      };
    default:
      return state;
  }
};
