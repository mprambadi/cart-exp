export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload
})


const initialState = {
	message: ""
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_ERROR:
			return { ...state, message: payload };

		default:
			return state;
	}
};
