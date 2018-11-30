import React from "react";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import CartItem from "./CartItem";

const Cart = ({ state, changeCart, removeCart, carts, total, changeState }) => {
	return (
		<div className="container content">
			<div className="row">
				<div className="w-100 bg-white">
					{carts.map(item => (
						<CartItem
							key={item.id}
							changeCart={changeCart}
							item={item}
							state={state}
							removeCart={removeCart}
						/>
					))}

					{total > 0 ? (
						<div className="d-flex justify-content-end mt-2">
							<div className="d-flex flex-column align-items-center mr-5">
								<div>Total ${total}</div>
								<button
									className="btn btn-success mb-3 pl-3 pr-3"
									onClick={changeCart}
								>
									Checkout
								</button>
							</div>
						</div>
					) : (
						<div
							className="d-flex justify-content-center mt-3"
							onClick={() => changeState({ name: "activeTab", value: "0" })}
						>
							<div className="d-flex flex-column align-items-center mb-5">
								<div className="h1">Empty Cart</div>
								<div className="btn btn-success">Add Item</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cart;
