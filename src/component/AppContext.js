import React, { Component } from "react";
import ThemeButton from "./ThemeButton";
import { ThemeContext } from "./ThemeContext";
import ButtonLagi from "./ButtonLagi";

export default class AppContext extends Component {
	constructor(props) {
		super(props);

		this.toggleTheme = () => {
			this.setState(state => ({
				theme: state.theme === "coba" ? "lagi" : "coba"
			}));
      };
      
      this.state = {
         theme: "coba",
         toggleTheme: this.toggleTheme,
       };
	}

	render() {
		return (
			<div>
				<ThemeContext.Provider value={this.state}>
					<ThemeButton />
				</ThemeContext.Provider>

            <ButtonLagi color="Red"/>
			</div>
		);
	}
}
