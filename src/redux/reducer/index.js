import { combineReducers } from "redux";
import carts, * as fromCart from "./carts";
import items, * as fromItems from "./items";

const rootReducer = combineReducers({
	carts,
	items
});

export default rootReducer;

const getCartsIds = state => fromCart.getCartsIds(state.carts);
const getQuantity = (state, id) => fromCart.getQuantity(state.carts, id);
const getProduct = (state, id) => fromItems.getProduct(state.items, id);

export const getCountTotal = state => {
	return fromCart.getCount(state.carts);
};

export const getCartProducts = state =>
	getCartsIds(state)
		.map(id => ({
			...getProduct(state, id),
			quantity: getQuantity(state, id),
		}))
		.filter(cart => cart.name.toLowerCase().indexOf(state.items.search) !== -1);

export const getTotal = state => {
	const total = getCartsIds(state).reduce(
		(total, id) => {
			return total + getProduct(state, id).price * getQuantity(state, id);
		},

		0
	);
	if (state.carts.discount) {
		return (total - total * 0.2).toFixed(2);
	}
	return total.toFixed(2);
};
