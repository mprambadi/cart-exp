/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { Button } from "reactstrap";
import { MdShoppingCart } from "react-icons/md";

const HeaderCart = ({ changeState, state }) => {
	const count = state.carts.length;
	const total =
		count > 0 ? state.carts.map(item => item.total).reduce((a, b) => a + b) : 0;
	return (
		<div className="d-flex align-items-center">
			<div className="text-white mr-2">Total: {total}</div>
			<Button onClick={() => changeState({ name: "activeTab", value: "1" })}>
				<MdShoppingCart style={{ width: 24, height: 24 }} />
				<span className="badge badge-primary">{count}</span>
			</Button>
		</div>
	);
};

export default HeaderCart;
