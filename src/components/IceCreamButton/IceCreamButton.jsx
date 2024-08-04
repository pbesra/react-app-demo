import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream, returnIceCream } from "../../IceCream/IceCreamAction";

const IceCreamButton = () => {
  const numIceCream = useSelector((state) => state.iceCream.numIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <div>Number of ice cream = {numIceCream}</div>
      <div>
        <button onClick={() => dispatch(buyIceCream())}>Buy cake</button>
        <button onClick={() => dispatch(returnIceCream())}>Return cake</button>
      </div>
    </>
  );
};
export default IceCreamButton;
