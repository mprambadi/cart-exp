import React from "react";
import { connect } from "react-redux";
import * as actions from "../reducers/counter";
import "../App.css";


class Counter extends React.Component {
	render() {
		return (
			<div className="app-container">
				<div className="app-content">
					<div>
						<button onClick={this.props.incrementAction}>
							increment
						</button>
						<button onClick={this.props.decrementAction}>decrement</button>
					</div>
					<br />
					<p>{this.props.angka}</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	angka: state.counter.count
});

export default connect(
	mapStateToProps,
	actions
)(Counter);
