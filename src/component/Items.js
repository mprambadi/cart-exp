import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { fetchProductsAction } from "../redux/actions/itemActions";

class Items extends React.Component {
	componentDidMount() {
		this.props.fetchProductsAction();
	}

	render() {
		const {
			props: { data }
		} = this;

		return (
			<div className="container content">
				<div className="row">
					{data.map(item => (
						<Item
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.items.data
	};
};

export default connect(
	mapStateToProps,
	{ fetchProductsAction }
)(Items);
