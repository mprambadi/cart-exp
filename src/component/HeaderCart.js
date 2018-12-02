import React from "react";
import { connect } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { getTotal, getCountTotal } from "../redux/reducer";
import { MenuContext } from "../view/MenuContext";

const HeaderCart = ({ total, count }) => {
	return (
		<MenuContext.Consumer>
			{({ changeTab }) => (
				<div className="d-flex align-items-center justify-content-between w-25">
					{total ? (
						<div className="text-white d-none d-sm-block d-md-block">
							Total: $ {total}
						</div>
					) : (
						<span className="text-white d-none d-sm-block d-md-block">
							Total:
						</span>
					)}
					<div
						className="btn btn-outline-success ml-1"
						onClick={() => changeTab(1)}
					>
						<MdShoppingCart style={{ width: 24, height: 24 }} />
						<span className="badge badge-primary">{count}</span>
					</div>
				</div>
			)}
		</MenuContext.Consumer>
	);
};

const mapStateToProps = state => ({
	total: getTotal(state),
	count: getCountTotal(state)
});
export default connect(
	mapStateToProps,
	null
)(HeaderCart);
