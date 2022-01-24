import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RegisterUserReducer } from "./Reducers/registerreducer";
import { loginUserReducer } from "./Reducers/loginreducer";

const FinalReducer = combineReducers({
  RegisterUserReducer: RegisterUserReducer,
  loginUserReducer: loginUserReducer,
});

const current_user = localStorage.getItem("current_user")
  ? JSON.parse(localStorage.getItem("current_user"))
  : null;

const initialState = {
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
