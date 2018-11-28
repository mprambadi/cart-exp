import React from "react";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import CartItem from "./CartItem";

const Cart = ({ state, changeCart, removeCart }) => {
	const filterItems = state.carts.filter(
		item => [item.name].join(" ").indexOf(state.filter) !== -1
	);
	const total = filterItems.map(item => item.total).reduce((a, b) => a + b, 0);

	return (
		<div className="w-100 bg-white">
			{filterItems.map(item => (
				<CartItem
					key={item.id}
					changeCart={changeCart}
					item={item}
					state={state}
					removeCart={removeCart}
				/>
			))}

			<div>Total {total}</div>
			<button className="btn btn-success mb-3 pl-3 pr-3" onClick={changeCart}>
				Checkout
			</button>
		</div>
	);
};

export default Cart;
