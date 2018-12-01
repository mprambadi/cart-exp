import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const rootStore = () => {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk))
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept(rootReducer, () => {
			const nextRootReducer = require(rootReducer);
			store.replaceReducer(nextRootReducer);
		});

		return store;
	}

	return store;
};

export default rootStore();
