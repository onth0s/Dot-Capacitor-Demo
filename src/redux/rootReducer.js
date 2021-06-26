import { combineReducers } from "redux";

import content from './reducers/content.js';
import common from './reducers/common.js';

import Reader from './reducers/common.js';

export const rootReducer = combineReducers({
	content, common, 
	Reader,
});
