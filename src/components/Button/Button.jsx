import { useState, useReducer, useCallback } from "react";

const Button = () => {
  return (
    <>
      <button>Click me ++ </button>
      <button>Click me --</button>
      <div>{"count"}</div>
      <div>total clicks={"total counts"}</div>
    </>
  );
};
export default Button;
