import { BUY_ICECREAM, RETURN_ICECREAM } from "./IceCreamTypes";

const initialState = {
  numIceCream: 0,
};
const iceCreamReducer = (state = initialState, action) => {
  let updatedState = { ...state };
  if (action.type === BUY_ICECREAM) {
    updatedState.numIceCream = updatedState.numIceCream + 1;
  } else if (action.type === RETURN_ICECREAM) {
    updatedState.numIceCream = updatedState.numIceCream - 1;
  }
  return { ...updatedState };
};

export default iceCreamReducer;
