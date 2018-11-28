import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({state, changeState}) => {
	return (
		<div className="d-flex">
			<div className="input-group d-flex justify-content-end">
				<input
               type="text"
					className="form-control text-center d-block"
               placeholder="search"
               value={state.filter}
               name='filter'
               onChange={({target:{name,value}})=>changeState({name,value})}
				/>
				<div className="input-group-append">
					<button className="btn btn-outline-dark" type="button" id="button-addon2">
						<MdSearch style={{ width: 24, height: 24 }} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Search;
