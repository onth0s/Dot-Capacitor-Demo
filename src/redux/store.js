import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
import rootReducer from './rootReducer.js';

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
})

export default store;
