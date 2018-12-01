import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from "../../root-type";
import { getProducts } from "../../services/api";

export const fetchProductsAction = () => async dispatch => {
	try {
		dispatch({ type: FETCH_PRODUCTS, payload: { loading: true } });
		const { data } = await getProducts();

		dispatch({
			type: FETCH_PRODUCTS_SUCCESS,
			payload: { data, loading: false }
		});
	} catch (error) {
		dispatch({
			type: FETCH_PRODUCTS_SUCCESS,
			payload: { error, loading: false }
		});
	}
};

