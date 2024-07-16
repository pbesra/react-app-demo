import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer } from "react";

const initialState = {
  color: "",
  count: 0,
  clickCount: 0,
  lastClickColorIncrement: "",
  lastClickColorDecrement: "",
};

const Button = () => {
  const reducer = (state, action) => {
    let updatedState = { ...state };
    updatedState.clickCount = updatedState.clickCount + 1;
    updatedState.color = "green";
    if (action.type === "increment") {
      updatedState.count = updatedState.count + 1;
      updatedState.lastClickColorIncrement = "blue";
      updatedState.lastClickColorDecrement = "";
    } else if (action.type === "decrement") {
      updatedState.count = updatedState.count - 1;
      updatedState.lastClickColorIncrement = "";
      updatedState.lastClickColorDecrement = "blue";
    }

    if (updatedState.count < 0) {
      updatedState.color = "red";
    }
    return { ...updatedState };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button
        style={{ backgroundColor: state.lastClickColorIncrement }}
        onClick={() => dispatch({ type: "increment" })}
      >
        Click me ++{" "}
      </button>
      <button
        style={{ backgroundColor: state.lastClickColorDecrement }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Click me --
      </button>
      <div style={{ color: state.color }}>{state.count}</div>
      <div>total clicks={state.clickCount}</div>
    </>
  );
};
export default Button;
