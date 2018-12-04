import React, { Component } from "react";
import { Provider } from "react-redux";
import Counter from "./container/Counter";
import { store } from "./store";
import Users from "./container/Users";
import Search from "./container/Search";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="app-container">
					<div className="app-content">
						<Search />
						<Users />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
