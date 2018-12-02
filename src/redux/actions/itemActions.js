import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, ITEMS_SEARCH } from "../../root-type";
import { getProducts } from "../../services/api";

export const fetchProductsAction = () => async dispatch => {

	try {
		dispatch({ type: FETCH_PRODUCTS });
      const { data } = await getProducts();
      dispatch(fetchProductSuccess(data))
	} catch (error) {
      dispatch(fetchProductError(error))
	}
};

export const searchItem = ({target:{value}}) => ({
   type:ITEMS_SEARCH,
   search:value
})

const fetchProductSuccess = products => ({
	type: FETCH_PRODUCTS_SUCCESS,
	products
});

const fetchProductError = error => ({
   type: FETCH_PRODUCTS_ERROR,
   error
})