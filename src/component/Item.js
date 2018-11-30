import React, { Component } from "react";
import { MdRemoveCircle, MdAddCircle } from "react-icons/md";
import "../App.scss";

class Item extends Component {
	state = {
		count: 1
	};

	handleCount = add => {
		this.setState(state => ({
			count: state.count ? parseInt(state.count) + parseInt(add) : 1
		}));
	};

	addItem = () => {
		const {
			props: { item, addItem },
			state: { count }
		} = this;

		if (count > 0) {
			addItem({
				id: item.id,
				count,
				price: item.price,
            total: item.price * count,
            checked:true,
				...item
			});
			this.setState({ count: 1 });
		}
	};

	changeCount = ({ target: { name, value } }) => {
		this.setState({
			[name]: value > 0 ? value.replace(/[^0-9]/g, "") : 1
		});
	};
	render() {
		const {
			props: { state, item }
		} = this;

		return (
			<div className="col-lg-3 col-md-3 col-md-6 col-6 mb-5">
				<div
					className={`item-content bg-white content-fade`}
				>
					<img className="col" src={item.image} alt="gambar" />
					<div className="d-flex flex-column align-items-center">
						<div>{item.name}</div>
						<div>$ {item.price}</div>

						<div className="d-flex flex-row align-items-center justify-content-center mb-2">
							<div className="btn p-1">
								<MdRemoveCircle
									style={{ width: 24, height: 24 }}
									onClick={() => this.state.count > 1 && this.handleCount(-1)}
								/>
							</div>
							<input
								placeholder="0"
								className="form-control w-25 text-center text-success"
								name="count"
								value={this.state.count}
								onChange={this.changeCount}
							/>

							<div className="btn p-1">
								<MdAddCircle
									style={{ width: 24, height: 24, color: "#28a745" }}
									onClick={() => this.handleCount(1)}
								/>
							</div>
						</div>

						<div className="d-flex flex-row align-items-center justify-content-center mb-2 w-75 d-">
							<span
								className={`text-danger ${
									this.state.count > 0 ? "d-none" : "d-inline"
								}`}
							>
								Minimal Pembelian adalah 1 barang
							</span>
						</div>
						<button
							className={`btn btn-success mb-3 pl-3 pr-3 ${this.state.count >
								0 || "disabled"}`}
							onClick={this.addItem}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
