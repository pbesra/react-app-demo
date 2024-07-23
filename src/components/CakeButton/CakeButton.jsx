import React from "react";
import { connect } from "react-redux";
import { buyCakeAction, returnCakeAction } from "../../reduxStore";
import Main from "../Main/Main";

const CakeButton = (props) => {
  return (
    <>
      <div>Number of cakes - {props.numCakes}</div>
      <button onClick={props.buyCakeAction}>buy cake</button>
      <button onClick={props.returnCakeAction}>return cake</button>
      {props.messageType?.length > 0 && (
        <div style={{ color: "red" }}>{props.messageType}</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numCakes: state.numCakes,
    messageType: state.messageType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakeAction: () => dispatch(buyCakeAction()),
    returnCakeAction: () => dispatch(returnCakeAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeButton);
