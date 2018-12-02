import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import "../App.scss";
import { MdLocalOffer } from "react-icons/md";
import { getCartProducts, getTotal } from "../redux/reducer";
import * as actions from "../redux/actions/";
import { MenuContext } from "../view/MenuContext";

const discountInput = React.createRef();

class Cart extends React.Component {
	state = {
		promoActive: false
	};
	render() {
		const { carts, total, addDiscount, discount, checkoutCart } = this.props;
		const { promoActive } = this.state;
		return (
			<div className="container content">
				<div className="w-100 bg-white content-item">
					<div className="row">
						<div className="col-12 col-md-8 col-lg-8">
							{carts.map(item => (
								<CartItem key={item.id} item={item} />
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
													onClick={() => checkoutCart()}
												>
													Checkout
												</button>
											</div>
										</div>
									) : (
										<MenuContext.Consumer>
											{({ changeTab }) => (
												<div
													className="d-flex justify-content-center mt-3"
													onClick={() => changeTab(0)}
												>
													<div className="d-flex flex-column align-items-center mb-5">
														<div className="h1">Empty Cart</div>
														<div className="btn btn-success">Add Item</div>
													</div>
												</div>
											)}
										</MenuContext.Consumer>
									)}
									{carts.length ? (
										<div>
											<div className="m-2 border-top">
												<div
													className="text-left mt-2 btn  btn-block"
													onClick={() =>
														this.setState({ promoActive: !promoActive })
													}
												>
													<MdLocalOffer /> Use Promo Code or Coupon
												</div>
											</div>
											{promoActive && (
												<div className="content-promo">
													<input
														name="discount"
														className="form-control"
														ref={discountInput}
													/>

													<div
														className={`text-center mt-2 ${discount &&
															"text-primary"}`}
													>
														{discount && "Diskon berhasil dipakai"}
													</div>

													<button
														className="btn btn-primary btn-block mt-2"
														onClick={() =>
															addDiscount(discountInput.current.value)
														}
														disabled={discount}
													>
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
	}
}

const mapStateToProps = state => {
	return {
		carts: getCartProducts(state),
		total: getTotal(state),
		discount: state.carts.discount
	};
};

export default connect(
	mapStateToProps,
	actions
)(Cart);
