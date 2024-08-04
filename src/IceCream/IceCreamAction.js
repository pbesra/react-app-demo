import { BUY_ICECREAM, RETURN_ICECREAM } from "./IceCreamTypes";

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export const returnIceCream = () => {
  return {
    type: RETURN_ICECREAM,
  };
};
