import {
	ADD_CART,
	REMOVE_CART,
	CHANGE_CART,
	CHECK_DISCOUNT,
	CHECK_OUT
} from "../../root-type";

export const addCart = ({ productId, count }) => (dispatch, getState) => {
	return dispatch(addCartItem({ productId, count }));
};

export const changeCart = ({ productId, count }) => (dispatch, getState) => {
	const stock = getState().items.productById[productId].stock;

	if (count <= stock) {
		dispatch(changeCartItem({ productId, count }));
	}
};

export const checkoutCart = () => ({
	type: CHECK_OUT
});

const changeCartItem = ({ productId, count }) => ({
	type: CHANGE_CART,
	productId,
	count,
});

export const addDiscount = payload => dispatch => {
	if (payload === "BELANJA") {
		return dispatch(checkDiscount(true));
	}
	dispatch(checkDiscount(false));
};

const checkDiscount = discount => {
	return {
		type: CHECK_DISCOUNT,
		discount
	};
};

const addCartItem = ({ productId, count }) => ({
	type: ADD_CART,
	productId,
	count
});

export const getCartItemCount = payload => {};

export const removeCartItem = productId => ({
	type: REMOVE_CART,
	productId
});
