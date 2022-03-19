import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import persistState from "redux-localstorage";

// let mainEnhancer = compose(persistState())
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;

console.log("Estado inicial:", store.getState());
store.subscribe(() => {
  console.log("Cambio de Estado:", store.getState());
});