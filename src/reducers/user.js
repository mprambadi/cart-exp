import axios from "axios";
import { fetchError } from "./error";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const SEARCH_USER = 'SEARCH_USER'

export const fetchUserAction = () => async dispatch => {
	dispatch(fetchUser());

	try {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		);

		dispatch(fetchUserSuccess(data));
	} catch (error) {
      dispatch(fetchError(error))
      dispatch(fetchUserSuccess([]))
   }
};

const fetchUser = () => ({
	type: FETCH_USER
});

const fetchUserSuccess = payload => ({
	type: FETCH_USER_SUCCESS,
	payload
});


export const searchUserAction = ({target:{value}}) => ({
  type: SEARCH_USER,
  payload:value
})

const initialState = {
	data: [],
   loading: false,
   search:''
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_USER:
			return { ...state, loading: true };
		case FETCH_USER_SUCCESS:
         return { ...state, data: payload, loading: false };
      case SEARCH_USER: 
         return {...state, search:payload}
		default:
			return state;
	}
};
