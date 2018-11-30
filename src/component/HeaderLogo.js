import React from "react";
import logo from '../logo.svg'

const HeaderLogo = ({changeState}) => {
	return (
		<div className="d-flex align-items-center">
			<img src={logo} width="60" height="60" alt="logo" className="App-logo" onClick={(()=>changeState({name:"activeTab", value:"0"}))}/>
			<div className="navbar-brand d-none d-sm-block d-md-block text-white" onClick={(()=>changeState({name:"activeTab", value:"0"}))}>Store</div>
		</div>
	);
};

export default HeaderLogo;
