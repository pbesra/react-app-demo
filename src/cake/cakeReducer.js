import { BUY_CAKE, RETURN_CAKE } from "./cakeTypes";

const initialState = {
  numCakes: 10,
  messageType: "",
};

const cakeReducer = (state = initialState, action) => {
  let updatedState = { ...state };
  if (action.type === BUY_CAKE) {
    updatedState = {
      ...updatedState,
      numCakes: updatedState.numCakes + 1,
      messageType: "",
    };
  } else if (action.type === RETURN_CAKE) {
    if (updatedState.numCakes > 0) {
      updatedState = { ...updatedState, numCakes: updatedState.numCakes - 1 };
    }
  }
  if (updatedState.numCakes <= 0) {
    updatedState = {
      ...updatedState,
      numCakes: 0,
      messageType: "No cakes to return",
    };
  }

  return {
    ...updatedState,
  };
};

export default cakeReducer;
