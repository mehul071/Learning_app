import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RegisterUserReducer } from "./Reducers/registerreducer";
import { loginUserReducer } from "./Reducers/loginreducer";
import { AddcourseReducer, getcourseReducer } from "./Reducers/coursereducer";
import { addquestionreducer } from "./Reducers/quizreducer";

const FinalReducer = combineReducers({
  RegisterUserReducer: RegisterUserReducer,
  loginUserReducer: loginUserReducer,
  AddcourseReducer: AddcourseReducer,
  getcourseReducer: getcourseReducer,
  addquestionreducer: addquestionreducer,
});

const courses = localStorage.getItem("courses")
  ? JSON.parse(localStorage.getItem("courses"))
  : [];

const current_user = localStorage.getItem("current_user")
  ? JSON.parse(localStorage.getItem("current_user"))
  : null;

const initialState = {
  getcourseReducer: {
    courses: courses,
  },
  loginUserReducer: {
    current_user: current_user,
  },
};

const composeEnhnacers = composeWithDevTools({});

const store = createStore(
  FinalReducer,
  initialState,
  composeEnhnacers(applyMiddleware(thunk))
);

export default store;
