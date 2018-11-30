import React, { Component } from "react";
import "./App.scss";
import Header from "./component/Header";
import Carts from "./component/Carts";
import Items from "./component/Items";
import Axios from "axios";
import { hot } from "react-hot-loader";

class App extends Component {
	state = {
		carts: [],
		activeTab: 0,
		loading: false,
		items: [],
		filter: ""
	};

	componentDidMount() {
		this.fetchData();
	}

	changeCart = change => {
		this.setState(state => ({
			carts: state.carts.map(cart =>
				cart.id === change.id
					? {
							...cart,
							...change,
							total: change.count * cart.price
					  }
					: cart
			)
		}));
	};

	fetchData = async () => {
		this.setState({ loading: true });
		const { data } = await Axios.get(
			"https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
		);

		this.setState({ loading: false, items: data });
	};
	addItem = add => {
		this.setState(state => {
			return {
				carts: state.carts.find(item => item.id === add.id)
					? state.carts.map(item =>
							item.id === add.id
								? {
										...item,
										...add,
										count: item.count + add.count,
										total: item.total + add.total
								  }
								: item
					  )
					: [...state.carts, add]
			};
		});
	};

	changeState = ({ name, value }) => {
		this.setState({ [name]: value });
	};

	removeCart = remove => {
		this.setState(state => ({
			carts: state.carts.filter(chart => chart.id !== remove.id)
		}));
	};

	filter = item => {
		return this.state[item].filter(
			item =>
				[item.name]
					.join(" ")
					.toLowerCase()
					.indexOf(this.state.filter) !== -1
		);
	};
	render() {
		const Tab = { 0: Items, 1: Carts };
		const Content = Tab[this.state.activeTab];
		const items = this.filter("items");
		const carts = this.filter("carts");
		const total = carts.map(item => item.total).reduce((a, b) => a + b, 0);
		const count = this.state.carts.length;
		return (
			<div className="bg-light">
				<Header
					changeState={this.changeState}
					state={this.state}
					carts={carts}
					total={total}
					count={count}
				/>
				<Content
					addItem={this.addItem}
					state={this.state}
					changeCart={this.changeCart}
					removeCart={this.removeCart}
					changeState={this.changeState}
					items={items}
					carts={carts}
					total={total}
				/>
			</div>
		);
	}
}

export default hot(module)(App);
