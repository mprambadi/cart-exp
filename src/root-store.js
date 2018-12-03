import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducer/";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";


const rootStore = () => {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const middleware = [thunk];
	if (process.env.NODE_ENV !== "production") {
		middleware.push(createLogger());
	}

	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(...middleware))
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
