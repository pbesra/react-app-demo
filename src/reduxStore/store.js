import { createStore, applyMiddleware } from "redux";
import cakeReducer from "../cake/cakeReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import customMiddleware from "./customApplyMiddleware";

const store = createStore(rootReducer, customMiddleware());

export default store;
