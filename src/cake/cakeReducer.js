import { BUY_CAKE, RETURN_CAKE } from "./cakeTypes";

const initialState = {
  numCakes: 10,
  messageType: "",
};

const cakeReducer = (state = initialState, action) => {
  let updatedState = { ...state, messageType: "" };
  if (action.type === BUY_CAKE) {
    updatedState = {
      ...updatedState,
      numCakes: updatedState.numCakes + 1,
    };
  } else if (action.type === RETURN_CAKE) {
    if (updatedState.numCakes <= 0) {
      updatedState = {
        ...updatedState,
        numCakes: 0,
        messageType: "No cakes to return",
      };
    } else {
      updatedState = { ...updatedState, numCakes: updatedState.numCakes - 1 };
    }
  }

  return {
    ...updatedState,
  };
};

export default cakeReducer;
