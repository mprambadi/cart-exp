import React from "react";
import { MdRemoveCircle, MdAddCircle, MdDelete } from "react-icons/md";
import "../App.scss";

const CartItem = props => {
	const handleCount = add => {
		const { item, changeCart } = props;

		if (item.count < 1) {
			return changeCart({ id: item.id, count: 1, quantity: 1 });
		}
		changeCart({ id: item.id, count: item.count + add });
	};

	const changeCount = ({ target: { name, value } }) => {
		const { item, changeCart } = props;
		changeCart({
			id: item.id,
			count: value > 0 ? value.replace(/[^0-9]/g, "") : 1
		});
	};

	const { item, removeCart, changeCart, state } = props;
	return (
		<div className="border-success border m-2 rounded content-fade">
			<div className="d-flex justify-content-between  align-items-center">
				<div className="d-flex align-items-center ml-2">
					<input
						type="checkbox"
						checked={item.checked}
						onChange={() =>
							changeCart({
								id: item.id,
								count: item.count,
								checked: !item.checked
							})
						}
					/>
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
									onClick={() => removeCart({ id: item.id })}
								/>
							</div>

							<div className="d-flex justify-content-end">
								<button
									className="btn p-0"
									disabled={
										state.items.find(content => content.id === item.id) &&
										state.items.find(content => content.id === item.id)
											.quantity === item.quantity
									}
									onClick={() => handleCount(-1)}
								>
									<MdRemoveCircle style={{ width: 24, height: 24 }} />
								</button>
								<input
									type="text"
									placeholder="0"
									className="form-control text-center text-success w-25"
									name="count"
									value={item.count}
									onChange={changeCount}
								/>
								<button
									className="btn p-0"
									disabled={item.quantity === 0}
									onClick={() => handleCount(1)}
								>
									<MdAddCircle
										style={{ width: 24, height: 24, color: "#28a745" }}
									/>
								</button>
							</div>
						</div>
					</div>

					<div className="text-right bg-white mr-2">Total $ {item.total}</div>

					<div className="d-flex flex-row align-items-center justify-content-center mb-2 w-75 d-">
						<span
							className={`text-danger ${
								item.count > 0 ? "d-none" : "d-inline"
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

export default CartItem;
