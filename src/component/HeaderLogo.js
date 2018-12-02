import React from "react";
import logo from "../logo.svg";
import { MenuContext } from "../view/MenuContext";

const HeaderLogo = () => {
	return (
		<MenuContext.Consumer>
			{({changeTab}) => (
				<div className="d-flex align-items-center">
					<img
						src={logo}
						width="60"
						height="60"
						alt="logo"
						className="App-logo"
						onClick={() => changeTab(0)}
					/>
					<div
						className="navbar-brand d-none d-sm-block d-md-block text-white"
						onClick={() => changeTab(0)}
					>
						Store
					</div>
				</div>
			)}
		</MenuContext.Consumer>
	);
};

export default HeaderLogo;
