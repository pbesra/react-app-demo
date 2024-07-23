import { BUY_CAKE } from "./cakeTypes";
import { RETURN_CAKE } from "./cakeTypes";
export const buyCakeAction = () => {
  return {
    type: BUY_CAKE,
  };
};

export const returnCakeAction = () => {
  return {
    type: RETURN_CAKE,
  };
};
