import React from "react";
import { connect } from "react-redux";
import { changeSearch } from "../actions/inputActions";

const Search = ({ changeSearch }) => {
	return (
		<div>
			<input onChange={({ target: { value } }) => changeSearch(value)} />
		</div>
	);
};

export default connect(
	null,
	{ changeSearch }
)(Search);
