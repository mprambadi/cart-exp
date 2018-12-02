import React, { Component } from "react";
import { MdRemoveCircle, MdAddCircle } from "react-icons/md";
import "../App.scss";
import { connect } from "react-redux";
import { addCart } from "../redux/actions/";
class Item extends Component {
	state = {
		count: 1,
		itemError: ""
	};

	handleCount = add => {

      console.log(this.props.item)
		this.setState(state => ({
			count: parseInt(state.count) + parseInt(add)
		}));
	};

	addItem = () => {
		const {
			props: { item, addCart },
			state: { count }
		} = this;

		addCart({ productId: item.id, count });
	};
	changeCount = ({ target: { value } }) => {
      this.setState({
			count:
				value <= this.props.item.stock ? value.replace(/[^0-9]/g, "") : 1
		});
	};

	render() {
		const {
			props: { item }
		} = this;

		return (
			<div className="col-lg-3 col-md-3 col-md-6 col-6 mb-5">
				<div className={`item-content bg-white content-fade`}>
					<img className="col" src={item.image} alt="gambar" />
					<div className="d-flex flex-column align-items-center">
						<div>{item.name}</div>
						<div>$ {item.price}</div>

						<div className="d-flex flex-row align-items-center justify-content-center mb-2">
							<button
								className="btn p-1"
								disabled={this.state.count <= 1}
								onClick={() => this.state.count > 1 && this.handleCount(-1)}
							>
								<MdRemoveCircle style={{ width: 24, height: 24 }} />
							</button>
							<input
								placeholder="0"
								className="form-control w-25 text-center text-success"
								name="count"
								value={this.state.count}
								onChange={this.changeCount}
								// disabled
							/>

							<button
								className="btn p-1"
								disabled={this.state.count >= item.inventory}
								onClick={() => this.handleCount(1)}
							>
								<MdAddCircle
									style={{ width: 24, height: 24, color: "#28a745" }}
								/>
							</button>
						</div>

						<div className="d-flex flex-row align-items-center justify-content-center mb-2 w-75 d-">
							<span
								className={`text-danger ${
									!this.state.itemError ? "d-none" : "d-inline"
								}`}
							>
								{this.state.itemError}
							</span>
						</div>
						<button
							className={`btn btn-success mb-3 pl-3 pr-3`}
							onClick={this.addItem}
							disabled={item.inventory === 0}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	{ addCart }
)(Item);
