import React from "react";
import Home from "./view/Home";
import { Provider } from "react-redux";
import rootStore from "./root-store";
import { hot } from "react-hot-loader";
import { fetchProductsAction } from "./redux/actions";


const App = () => {
	return (
		<Provider store={rootStore}>
			<Home />
		</Provider>
	);
};

export default hot(module)(App);
