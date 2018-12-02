import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { fetchProductsAction } from "../redux/actions/itemActions";
import { getVisibleProducts } from "../redux/reducer/items";

const Items = ({ products }) => {
	return (
		<div className="container content">
			<div className="row">
				{products.map(item => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
      products: getVisibleProducts(state.items)
	};
};

export default connect(
	mapStateToProps,
	{ fetchProductsAction }
)(Items);
