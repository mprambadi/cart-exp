import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_ERROR
} from "../../root-type";

const initialState = {
	data: [],
	loading: false,
	message: "",
	error: ""
};

export const items = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				...payload,
				data: payload.data.map(item => {
					item.quantity = 5;
					return item;
				})
			};

		case FETCH_PRODUCTS_ERROR:
			return { ...state, ...payload };

		case FETCH_PRODUCTS:
			return { ...state, ...payload };

		default:
			return state;
	}
};
