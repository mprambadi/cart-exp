/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const HeaderCart = ({ changeState, total, ...props }) => {
	return (
		<div className="d-flex align-items-center justify-content-between w-25">
			{total ? (
				<div className="text-white d-none d-sm-block d-md-block">
					Total: $ {total}
				</div>
			) : (
				<span className="text-white d-none d-sm-block d-md-block">Total:</span>
			)}
			<div
				className="btn btn-outline-success ml-1"
				onClick={() => changeState({ name: "activeTab", value: "1" })}
			>
				<MdShoppingCart style={{ width: 24, height: 24 }} />
				<span className="badge badge-primary">{props.count}</span>
			</div>
		</div>
	);
};

export default HeaderCart;
