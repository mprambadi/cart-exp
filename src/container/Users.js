import React from "react";
import { connect } from "react-redux";
import * as actions from "../reducers/user";
import User from "../component/User";
import { getUser, getUserLength } from "../reducers";

class Users extends React.Component {
	componentDidMount() {
		this.props.fetchUserAction();
	}
	render() {
      if(this.props.loading){
         return <div> Loadingggg..........</div>
      }
		return (
			<div>
				{this.props.users.map(user => (
					<User key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
   users: getUser(state),
   length: getUserLength(state),
   loading: state.user.loading,
   error: state.error.message
});

export default connect(
	mapStateToProps,
	actions
)(Users);
