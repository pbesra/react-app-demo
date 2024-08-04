import { applyMiddleware } from "redux";
import logger, { createLogger } from "redux-logger";

const customLogger = createLogger({
  predicate: (getState, action) => true,
});

const customMiddleware = (middleware = customLogger) => {
  return applyMiddleware(middleware);
};
export default customMiddleware;
