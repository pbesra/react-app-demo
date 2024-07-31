import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
import rootReducer from "./reduxStore/rootReducer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<div>
					<Main />
				</div>
			</div>
		</Provider>
	);
}

export default App;
