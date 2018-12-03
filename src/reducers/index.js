import { combineReducers } from "redux";
import counter from "./counter";
import input from "./input";

const rootReducer = combineReducers({
	counter,
	input
});

export default rootReducer;

export const getUserFilter = state => {
	const filter = state.counter.data.filter(
		user => user.name.toLowerCase().indexOf(state.input.search) !== -1
	);
	return filter;
};
