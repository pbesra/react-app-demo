import { useState } from "react";

const MyButton = () => {
	const [counter, setCounter] = useState(0);
	const increment = () => {
		setCounter(counter + 1);
	};
	return (
		<>
			<button onClick={increment}>Increment count</button>
			<span>{counter}</span>
		</>
	);
};
export default MyButton;
