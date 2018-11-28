import React from "react";

import Search from "./Search";
import HeaderLogo from "./HeaderLogo";
import HeaderCart from "./HeaderCart";

const Header = ({ changeState, state }) => {

	return (
		<div className="fixed-top bg-dark">
			<div className="container">
				<div className="d-flex justify-content-between align-items-center">
					<HeaderLogo changeState={changeState} />
					<Search state={state} changeState={changeState} />
					<HeaderCart changeState={changeState} state={state} />
				</div>
			</div>
		</div>
	);
};

export default Header;
