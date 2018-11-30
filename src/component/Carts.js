import React from "react";
import CartItem from "./CartItem";
import "../App.scss";
import {  MdLocalOffer } from "react-icons/md";

const Cart = ({ state, changeCart, removeCart, carts, total, changeState, checkAllCarts, deleteAllCarts }) => {
	return (
		<div className="container content">
			<div className="w-100 bg-white content-item">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-8">
						{total ? (
							<div className="d-flex justify-content-between m-2 border border-success rounded p-2">
								<div className=" d-flex align-items-center">
									<input type="checkbox" checked={state.cartsChecked} onChange={checkAllCarts}/>
									<div className="ml-2">Check All Product</div>
								</div>
								<div className="btn" onClick={deleteAllCarts}> Delete </div>
							</div>
						) : (
							""
						)}
						{carts.map(item => (
							<CartItem
								key={item.id}
								changeCart={changeCart}
								item={item}
								state={state}
								removeCart={removeCart}
							/>
						))}
					</div>
					<div className="col-12 col-md-4 col-lg-4 content-fade">
						<div className="position-fixed col-11 col-md-2 col-lg-3">
							<div className="d-flex flex-column m-2 p-1 border border-success rounded ">
								{total > 0 ? (
									<div className="d-flex justify-content-end mt-2">
										<div className="d-flex flex-column w-100 justify-content-center">
											<div className="m-2 border-bottom">
												<h3>Order Summary</h3>
											</div>
											<div className="m-2 border-bottom d-flex justify-content-between">
												<div>Total Price</div>
												<div>$ {total} </div>
											</div>
											<button
												className="btn btn-success mb-2 pl-3 pr-3 border-bottom"
												onClick={changeCart}
											>
												Checkout
											</button>
										</div>
									</div>
								) : (
									<div
										className="d-flex justify-content-center mt-3"
										onClick={() =>
											changeState({ name: "activeTab", value: "0" })
										}
									>
										<div className="d-flex flex-column align-items-center mb-5">
											<div className="h1">Empty Cart</div>
											<div className="btn btn-success">Add Item</div>
										</div>
									</div>
								)}
								{carts.length ? (
									<div>
										<div className="m-2 border-top">
											<div
												className="text-left mt-2 btn  btn-block"
												onClick={() =>
													changeState({
														name: "promoActive",
														value: !state.promoActive
													})
												}
											>
												<MdLocalOffer /> Use Promo Code or Coupon
											</div>
										</div>
										{state.promoActive && (
											<div className="content-promo">
												<input className="form-control" />
												<button className="btn btn-primary btn-block mt-2">
													Add Promo
												</button>
											</div>
										)}
									</div>
								) : (
									""
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
