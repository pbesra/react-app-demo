import { useSelector, useDispatch } from "react-redux";
import { buyCakeAction, returnCakeAction } from "../../reduxStore";

const HookCakeButton = () => {
  const numCakes = useSelector((state) => state.cake.numCakes);
  const messageType = useSelector((state) => state.cake.messageType);
  const dispatch = useDispatch();
  return (
    <>
      <div>Number of cakes = {numCakes}</div>
      <div>
        <button onClick={() => dispatch(buyCakeAction())}>Add cake</button>
        <button onClick={() => dispatch(returnCakeAction())}>
          return cake
        </button>
        {messageType?.length > 0 && (
          <div style={{ color: "red" }}>{messageType}</div>
        )}
      </div>
    </>
  );
};

export default HookCakeButton;
