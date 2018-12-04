import { combineReducers } from "redux";
import user from "./user";
import counter from "./counter";
import error from "./error";

const rootReducer = combineReducers({
	user,
	counter,
	error
});

export default rootReducer;

export const getUser = state => {
	return state.user.data.filter(
		user => user.name.toLowerCase().indexOf(state.user.search) !== -1
	);
};

export const getSearch = state => {
	return state.user.search;
};

export const getUserLength = state => {
	return state.user.data.length;
};
