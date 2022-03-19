import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import { authReducer } from "./authReducer";
import {acountReducer} from './acountReducer'

const rootReducers = combineReducers({ authReducer, acountReducer, registerReducer });

export default rootReducers;
