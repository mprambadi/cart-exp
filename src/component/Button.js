import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class Button extends Component {
	static contextType = ThemeContext;
	render() {
		return (
			<ThemeContext.Consumer>
				{({theme, toggleTheme}) => <button onClick={toggleTheme}> {theme} </button>}
			</ThemeContext.Consumer>
		);
	}
}
