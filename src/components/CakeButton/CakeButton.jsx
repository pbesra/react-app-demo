import React from "react";
import { connect } from "react-redux";
import { buyCakeAction, returnCakeAction } from "../../reduxStore";

const CakeButton = ({
  numCakes,
  buyCakeAction,
  returnCakeAction,
  messageType,
}) => {
  return (
    <>
      <div>Number of cakes - {numCakes}</div>
      <button onClick={buyCakeAction}>buy cake</button>
      <button onClick={returnCakeAction}>return cake</button>
      {messageType?.length > 0 && (
        <div style={{ color: "red" }}>{messageType}</div>
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
