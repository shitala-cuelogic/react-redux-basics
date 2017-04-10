import logger from "redux-logger";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";


export default createStore(combineReducers({
  math: mathReducer, //As per ES5
  userReducer //As per ES6
}), {}, applyMiddleware(logger, thunk));