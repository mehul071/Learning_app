export const addquestionreducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW_QUESTION_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "NEW_QUESTION_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "NEW_QUESTION_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    default:
      return state;
  }
};

export const getallquestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_QUESTIONS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_QUESTIONS_SUCCESS":
      return {
        loading: false,
        success: true,
        questions: action.payload,
      };
    case "GET_QUESTIONS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
