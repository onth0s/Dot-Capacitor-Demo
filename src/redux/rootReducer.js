import { combineReducers } from "redux";

import content from './reducers/content.js';

export const rootReducer = combineReducers({
	content,
});
