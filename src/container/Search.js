import React from "react";
import { connect } from "react-redux";
import { getSearch } from "../reducers";
import * as actions from "../reducers/user";

const Search = ({ user, searchUserAction }) => {
	return (
		<div>
			<input type="text" value={user} onChange={searchUserAction} />
		</div>
	);
};

const mapStateToProps = state => ({
	search: getSearch(state)
});
export default connect(
	mapStateToProps,
	actions
)(Search);
