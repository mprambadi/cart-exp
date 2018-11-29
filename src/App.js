import React, { Component } from "react";
import $ from "jquery";
import { withFormik } from "formik";
import * as yup from "yup";

window.jQuery = $;
require("chosen-js");

class App extends Component {
	constructor(props) {
		super(props);

		console.log("ini constructor");
		this.state = {
			hello: "world",
			tab: "satu",
			coba: "dua"
		};
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log(nextProps, "prpos", prevState, "state", "gdsf");

	// 	// return null
	// 	return {
	// 		coba: "asdfasdf"
	// 	};
	// }

	componentDidMount() {
		console.log("ini component didmount");
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log("cdu kepanggil");
	};

	render() {
		console.log("ini render", this.state.coba);
		const Tab = {
			satu: Satu,
			dua: Dua
		};

		const Item = Tab[this.state.tab];
		return (
			<div className="App">
				<button onClick={() => this.setState({ tab: "satu" })}> Satu</button>
				<button onClick={() => this.setState({ tab: "dua" })}> Dua</button>
				<input onChange={e => this.setState({ coba: e.target.value })} />

				{this.state.coba}

				<CobaPure coba={this.state.tab} />
			</div>
		);
	}
}

export default App

class CobaPure extends React.PureComponent {
	render() {
      console.log('render pure',)
		return <div>{this.props.coba}</div>;
	}
}
class Satu extends React.Component {
	componentWillUnmount() {
		console.log("unmount satu");
	}
	componentDidMount = () => {
		console.log("cdm satu");
	};

	render() {
		console.log("this.props satu", this.props);
		return (
			<div>
				{React.Children.map(this.props.children, (child, i) => {
					return React.cloneElement(
						child,
						(onclick = () => console.log("Hello"))
					);
				})}
			</div>
		);
	}
}

class Dua extends React.Component {
	state = {
		dua: "Hello"
	};

	shouldComponentUpdate() {
		return false;
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log(nextProps, "ini nextprops");
		return nextProps;
	}

	componentWillUnmount() {
		console.log("unmount dua");
	}
	componentDidMount() {
		console.log("cdm 2");
	}
	render() {
		console.log("render dua");
		console.log("this.props dua", this.props);

		return <div>{this.props.coba}</div>;
	}
}

class Chosen extends React.Component {
	componentDidMount() {
		this.$el = $(this.el);
		this.$el.chosen();

		this.handleChange = this.handleChange.bind(this);
		this.$el.on("change", this.handleChange);
	}

	componentWillUnmount() {
		this.$el.off("change", this.handleChange);
		this.$el.chosen("destroy");
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<div>
				<select className="Chosen-select" ref={el => (this.el = el)}>
					{this.props.children}
				</select>
			</div>
		);
	}
}

function Example() {
	return (
		<Chosen onChange={value => console.log(value)}>
			<option>vanilla</option>
			<option>chocolate</option>
			<option>strawberry</option>
		</Chosen>
	);
}

class Parent extends React.Component {
	state = {
		satu: "satu",
		dua: "dua",
		tiga: "tiga",
		loading: true
	};

	render() {
		return (
			<div>
				Parent
				<WithLoader {...this.state} loading={this.state.loading} />
			</div>
		);
	}
}

const LoaderHOC = loading => WrappedComponent => {
	return class Loader extends React.Component {
		state = {
			hello: "ini Loader"
		};

		render() {
			if (this.props[loading]) {
				return <div>loading</div>;
			}
			return <WrappedComponent {...this.state} />;
		}
	};
};

class LoaderFACC extends Component {
	render() {
		return this.props.children("value");
	}
}
const Children = props => {
	console.log(props);
	return (
		<div>
			<LoaderFACC>{value => <div>{value}</div>}</LoaderFACC>
		</div>
	);
};

const Cucu = props => {
	return <div> {props.cucu} </div>;
};

const WithLoader = LoaderHOC("loading")(Children);

const MyForm = props => {
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid
	} = props;

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.name}
				name="name"
			/>
			{errors.name && touched.name && <div id="feedback">{errors.name}</div>}
			<button type="submit" disabled={!isValid && true}>
				Submit
			</button>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</form>
	);
};

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.min(10)
		.required()
});

const MyEnhancedForm = withFormik({
	mapPropsToValues: () => ({ name: "" }),

	validationSchema,

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},

	displayName: "BasicForm"
})(MyForm);
