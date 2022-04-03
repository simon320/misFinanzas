import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { acountReducer } from './acountReducer'
import { registerReducer } from "./registerReducer";

const rootReducers = combineReducers({ authReducer, acountReducer, registerReducer });

export default rootReducers;
