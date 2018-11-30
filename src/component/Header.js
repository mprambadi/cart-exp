import React from "react";

import Search from "./Search";
import HeaderLogo from "./HeaderLogo";
import HeaderCart from "./HeaderCart";

const Header = ({ changeState, state, ...props }) => {
	return (
		<div className="fixed-top bg-dark app-header">
			<div className="container">
				<div className="d-flex justify-content-between align-items-center">
					<HeaderLogo changeState={changeState} />
					<Search state={state} changeState={changeState} />
					<HeaderCart changeState={changeState} state={state} {...props}/>
				</div>
			</div>
		</div>
	);
};

export default Header;
