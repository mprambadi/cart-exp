import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import UsersList from "./container/UsersList";
import Search from "./container/Search";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Search />
					<UsersList />
				</div>
			</Provider>
		);
	}
}

export default App;
