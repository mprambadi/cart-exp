import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT,
	FETCH_SUCCESS,
	FETCH_DATA
} from "../type";

const initialState = {
	counter: 1,
	data: [],
	loading: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_DATA:
			return { ...state, loading: true };
		case FETCH_SUCCESS:
			return { ...state, data: [...state.data, ...payload], loading: false };
		default:
			return state;
	}
};
