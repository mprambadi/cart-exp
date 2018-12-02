import {
	ADD_CART,
	REMOVE_CART,
	REMOVE_ALL_CART,
	CHECK_ALL_CART,
	CHECK_DISCOUNT,
	CHANGE_CART,
	CHECK_OUT
} from "../../root-type";

const initialState = {
	carts: [],
	quantityById: {},
	discount: false
};

const cartFindById = (state, action) =>
	state.find(item => item === action.productId);

const addToCartCount = (state = initialState.carts, action) => {
	switch (action.type) {
		case ADD_CART:
			const item = cartFindById(state, action);
			return item ? state : [...state, action.productId];
		case REMOVE_CART:
			return state.filter(cart => cart !== action.productId);
		default:
			return state;
	}
};

const quantityById = (state = initialState.quantityById, action) => {
	const { productId, count } = action;
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
				[productId]: (state[productId] || 0) + parseInt(count)
			};
		case REMOVE_CART:
			return {
				...state,
				[productId]: null
			};
		case CHANGE_CART:
			return {
				...state,
				[productId]: parseInt(count)
			};
		default:
			return state;
	}
};
const discountById = (state = initialState.discount, action) => {
	switch (action.type) {
		case ADD_CART:
			return false;
		case CHANGE_CART:
			return false;
		case CHECK_DISCOUNT:
			return action.discount;
		default:
			return state;
	}
};
const carts = (state = initialState, action) => {
	switch (action.type) {
		case REMOVE_CART:
			return {
				...state,
				carts: addToCartCount(state.carts, action),
				quantityById: quantityById(state.quantityById, action)
			};
		case REMOVE_ALL_CART:
			return { ...state, ...action.payload };
		case CHECK_ALL_CART:
			return { ...state, ...action.payload };
		case CHECK_OUT:
			return initialState;
		default:
			return {
				carts: addToCartCount(state.carts, action),
				quantityById: quantityById(state.quantityById, action),
				discount: discountById(state.discount, action)
			};
	}
};

export const getCartsIds = state => state.carts;
export const getCount = state => state.carts.length;

export const getQuantity = (state, productId) =>
	state.quantityById[productId] || 0;

export default carts;
