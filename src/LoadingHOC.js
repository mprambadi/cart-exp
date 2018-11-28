import React, { Component } from "react";

const Loading = loading => WrappedComponent => {
	return class LoadingHOC extends Component {
		state = {
			coba:"satu"
      };
      




      handleClick = () => {
         this.setState({coba:'lagi'})
      }

		render() {
      
			return <WrappedComponent {...this.props}  {...this.state} handleClick={this.handleClick}/>;
		}
	};
};

export default Loading;
