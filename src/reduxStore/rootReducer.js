import { combineReducers } from "redux";
import cakeReducer from "../cake/cakeReducer";
import iceCreamReducer from "../IceCream/IceCreamReducer";
const reducerList = {
  cake: cakeReducer,
  iceCream: iceCreamReducer,
};

var rootReducer = combineReducers(reducerList);
export default rootReducer;
