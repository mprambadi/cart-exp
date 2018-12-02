import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_ERROR,
	ADD_CART,
	CHANGE_CART,
	ITEMS_SEARCH
} from "../../root-type";
import { combineReducers } from "redux";

const products = (state, action) => {
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
            inventory: state.inventory - action.count,
			};
		case CHANGE_CART:
			return {
				...state,
				inventory: state.stock - action.count
			};
		default:
			return state;
	}
};

const productById = (state = {}, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				...action.products.reduce((obj, product) => {
					product.inventory = 5;
					product.stock = 5;
					obj[product.id] = product;

					return obj;
				}, {}),
				loading: false
			};
		case FETCH_PRODUCTS_ERROR:
			return { ...state, ...action.error, loading: false };
		case FETCH_PRODUCTS:
			return { ...state, loading: true };
		default:
			const { productId } = action;
			if (productId) {
				return {
					...state,
					[productId]: products(state[productId], action)
				};
			}
			return state;
	}
};

const visibleIds = (state = [], action) => {
	switch (action.type) {
		case FETCH_PRODUCTS_SUCCESS:
			return action.products.map(product => product.id);
		default:
			return state;
	}
};

const search = (state = "", action) => {
	switch (action.type) {
		case ITEMS_SEARCH:
			return action.search;
		default:
			return state;
	}
};

export default combineReducers({
	productById,
	visibleIds,
	search
});

export const getProduct = (state, id) => state.productById[id];

export const getVisibleProducts = state => {
	return state.visibleIds
		.map(id => getProduct(state, id))
		.filter(product => product.name.toLowerCase().indexOf(state.search) !== -1);
};
