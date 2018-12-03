import React, { Component } from "react";
import { checkCounter } from "../actions/countersAction";
import { connect } from "react-redux";
import User from "../component/User";
import { getUserFilter } from "../reducers";

class UsersList extends Component {
	componentDidMount() {
		this.props.checkCounter();
	}

	render() {
		return (
			<div>
				{this.props.data.map(user => (
					<User user={user} key={user.id} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	data: getUserFilter(state)
});

export default connect(
	mapStateToProps,
	{ checkCounter }
)(UsersList);
