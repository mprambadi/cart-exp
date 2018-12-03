import axios from "axios";
import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT,
	FETCH_DATA,
	FETCH_SUCCESS
} from "../type";

export const checkCounter = payload => (dispatch, getState) => {
	dispatch(fetchData());
	axios("https://jsonplaceholder.typicode.com/users").then(({ data }) =>
		dispatch(fetchDataReceive(data))
	);
};

export const fetchDataReceive = payload => ({
	type: FETCH_SUCCESS,
	payload
});
export const fetchData = () => ({
	type: FETCH_DATA
});

export const counterDecrement = () => ({
	type: COUNTER_DECREMENT
});

export const counterIncrement = () => ({
	type: COUNTER_INCREMENT
});
