import { combineReducers } from "redux";
import { carts, items } from "./redux/reducer/";

const rootReducer = combineReducers({
	carts,
	items
});

export default rootReducer;
