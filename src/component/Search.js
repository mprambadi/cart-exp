import React from "react";
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index'
import { MdSearch } from "react-icons/md";

const Search = ({search, searchItem}) => {
	return (
		<div className="d-flex">
			<div className="input-group d-flex justify-content-end">
				<input
               type="text"
					className="form-control text-center d-block"
               placeholder="search"
               value={search}
               name='filter'
               onChange={searchItem}
				/>
				<div className="input-group-append">
					<button className="btn" type="button" id="button-addon2">
						<MdSearch style={{ width: 24, height: 24 }} />
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
   search: state.items.search
})
export default connect(mapStateToProps,actions)(Search);
