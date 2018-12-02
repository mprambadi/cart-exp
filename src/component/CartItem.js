import React from "react";
import { MdRemoveCircle, MdAddCircle, MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import "../App.scss";
import * as actions from "../redux/actions/index";

const CartItem = props => {
	const { item, removeCartItem, addCart, changeCart } = props;

	return (
		<div className="border-success border m-2 rounded content-fade">
			<div className="d-flex justify-content-between  align-items-center">
				<div className="d-flex align-items-center ml-2">
					{/* <input
						type="checkbox"
						// checked={item.checked}
                  onChange={({ target: { checked } }) =>
							changeCart({ productId: item.id, checked })
						}
					/> */}
					<img src={item.image} alt="gambar" height="100" />
					<div className="d-flex flex-column align-items-start ">
						<div>{item.name}</div>
						<div>{item.price}</div>
					</div>
				</div>

				<div className="d-flex flex-column align-items-end content-fade">
					<div className="d-flex flex-row justify-content-end align-items-center  mb-2 mr-2 ">
						<div className="d-flex flex-column  align-items-end">
							<div className="btn p-0">
								<MdDelete
									style={{ width: 24, height: 24 }}
									onClick={() => removeCartItem(item.id)}
								/>
							</div>

							<div className="d-flex justify-content-end">
								<button
									className="btn p-0"
									disabled={item.quantity === 1}
									onClick={() => addCart({ productId: item.id, count: -1 })}
								>
									<MdRemoveCircle style={{ width: 24, height: 24 }} />
								</button>
								<input
									type="text"
									placeholder="0"
									className="form-control text-center text-success w-25"
									name="count"
									value={item.quantity}
									onChange={({ target: { value } }) =>
										changeCart({ productId: item.id, count: value })
									}
								/>
								<button
									className="btn p-0"
									disabled={item.inventory === 0}
									onClick={() => addCart({ productId: item.id, count: 1 })}
								>
									<MdAddCircle
										style={{ width: 24, height: 24, color: "#28a745" }}
									/>
								</button>
							</div>
						</div>
					</div>

					<div className="text-right bg-white mr-2">
						Total $ {item.price * item.quantity}
					</div>

					<div className="d-flex flex-row align-items-center justify-content-center mb-2 w-75 d-">
						<span
							className={`text-danger ${
								item.quantity < 0 ? "d-inline" : "d-none"
							}`}
						>
							Minimal Pembelian adalah 1 barang
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(
	null,
	actions
)(CartItem);
