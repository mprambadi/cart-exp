import {
	ADD_CART,
	REMOVE_CART,
	REMOVE_ALL_CART,
	CHECK_ALL_CART,
	TOTAL_CALC_CART
} from "../../root-type";

const initialState = {
	carts: [],
	// cartsChecked: true,
	// activeTab: 0,
	// loading: false,
	// items: [],
	// filter: "",
	// promoActive: false,
	// totalCartsPrice: 0,
	// discount: "",
	// discountMessage: "",
	// discountStatus: false
};


export const calcCount = (state, item) =>
	state.carts.find(cart => cart.id === item.id) &&
	state.carts.find(cart => cart.id === item.id).quantity;

const cartFindById = (state, payload) =>
	state.carts.find(item => item.id === payload.id);

const addToCartCount = (state, add) => {
	return state.carts.map(item =>
		item.id === add.id
			? {
					...item,
					...add,
					count: item.count + add.count,
					total: item.total + add.total,
					quantity: item.quantity - add.count
			  }
			: item
	);
};

const addToCart = (state, payload) => [...state.carts, payload];

export const carts = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_CART:
			return {
				...state,
				carts: cartFindById(state, payload)
					? addToCartCount(state, payload)
					: addToCart(state, payload)
			};

		case REMOVE_CART:
			return { ...state, ...payload };
		case REMOVE_ALL_CART:
			return { ...state, ...payload };
		case CHECK_ALL_CART:
			return { ...state, ...payload };

		default:
			return state;
	}
};
