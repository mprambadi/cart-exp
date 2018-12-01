export * from './carts'
export * from './items'


export const getTotalCartsCount = state =>
	state.carts.map(cart => cart.total).reduce((a, b) => a + b, 0);
