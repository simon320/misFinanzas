import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";


// let mainEnhancer = compose(persistState())
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;

// console.log("Estado inicial:", store.getState());
// store.subscribe(() => {
//   console.log("Cambio de Estado:", store.getState());
// });