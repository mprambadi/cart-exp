import React, { Component } from "react";
import "../App.scss";
import Header from "../component/Header";
import Carts from "../component/Carts";
import Items from "../component/Items";
import { connect } from "react-redux";
import * as actions from "../redux/actions/";
import { MenuContext } from "./MenuContext";

class Home extends Component {
	constructor(props) {
		super(props);

		this.changeTab = activeTab => {
			this.setState({ activeTab });
		};

		this.state = {
			activeTab: 0,
			changeTab: this.changeTab
		};
	}

	componentDidMount() {
		this.props.fetchProductsAction();
	}

	checkAllCarts = () => {
		this.setState(state => ({
			cartsChecked: !state.cartsChecked,
			carts: state.carts.map(cart => {
				cart.checked = !cart.checked;
				return cart;
			})
		}));
	};

	deleteAllCarts = () => {
		this.setState(
			state => ({
				carts: state.carts.filter(cart => cart.checked !== true),
				...this.resetPromo
			}),
			() => this.totalCartCalc()
		);
	};

	render() {
		const Tab = { 0: Items, 1: Carts };
		const Content = Tab[this.state.activeTab];
		return (
			<div className="bg-light">
				<MenuContext.Provider value={this.state}>
					<Header />
					<Content />
				</MenuContext.Provider>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(Home);
