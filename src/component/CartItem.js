import React, { Component } from "react";
import { MdRemoveCircle, MdAddCircle, MdDelete } from "react-icons/md";
import "../App.scss";

const CartItem = props => {
	const handleCount = add => {
		const { item, changeCart, removeCart } = props;

		if (item.count < 1) {
			removeCart({ id: item.id });
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

	const { state, item, removeCart } = props;
	return (
		<div>
			<div className="d-flex justify-content-between bg-white border-bottom align-items-center">
				<img src={item.image} alt="gambar" width="100" height="100" />
				<div className="d-flex flex-column align-items-center">
					<div>{item.name}</div>
					<div>{item.price}</div>
				</div>

				<div className="d-flex flex-column align-items-center">
					<div className="d-flex flex-row align-items-center justify-content-center mb-2 w-75">
						<div className="btn">
							<MdRemoveCircle
								style={{ width: 32, height: 32 }}
								onClick={() => handleCount(-1)}
							/>
						</div>
						<input
							type="text"
							placeholder="0"
							className="form-control w-75 text-center text-success"
							name="count"
							value={item.count}
							onChange={changeCount}
						/>
						<div className="btn">
							<MdAddCircle
								style={{ width: 32, height: 32 }}
								onClick={() => handleCount(1)}
							/>
						</div>

						<div className="btn">
							<MdDelete
								style={{ width: 32, height: 32 }}
								onClick={() => removeCart({ id: item.id })}
							/>
						</div>
					</div>

					<div>Total {item.total}</div>

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
