import React from "react";

import Search from "./Search";
import HeaderLogo from "./HeaderLogo";
import HeaderCart from "./HeaderCart";

const Header = ({ changeState }) => {
	return (
		<div className="fixed-top bg-dark app-header">
			<div className="container">
				<div className="d-flex justify-content-between align-items-center">
					<HeaderLogo changeState={changeState} />
					<Search/>
					<HeaderCart changeState={changeState}/>
				</div>
			</div>
		</div>
	);
};

export default Header;
