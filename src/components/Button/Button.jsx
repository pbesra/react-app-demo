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
    state.clickCount = state.clickCount + 1;
    state.color = "green";
    if (action.type === "increment") {
      state.count = state.count + 1;
      state.lastClickColorIncrement = "blue";
      state.lastClickColorDecrement = "";
    } else if (action.type === "decrement") {
      state.count = state.count - 1;
      state.lastClickColorIncrement = "";
      state.lastClickColorDecrement = "blue";
    }

    if (state.count < 0) {
      state.color = "red";
    }
    return { ...state };
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
