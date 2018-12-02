import React from "react";

export const MenuContext = React.createContext({
	activeTab: 1,
	changeTab: () => {}
});
