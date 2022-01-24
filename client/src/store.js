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

const composeEnhnacers = composeWithDevTools({});
const initialState = {};
const store = createStore(
  FinalReducer,
  initialState,
  composeEnhnacers(applyMiddleware(thunk))
);

export default store;
