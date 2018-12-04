import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/";
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlerware = [logger, thunk];
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlerware)));
