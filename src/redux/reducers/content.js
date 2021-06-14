import { createSlice } from '@reduxjs/toolkit';

import { icons } from '../../resources/icons.js';

const { actions, reducer } = createSlice({
	name: 'test',

	initialState: {
		shelfItems: [],
	},

	reducers: {
		addShelfItem: (state, { payload }) => {
			console.log('addItem() called');

			const arr = state.shelfItems;
			arr.unshift(payload);

			state.shelfItems = arr;
		},
	}
})

export const getShelfItems = (state) => {
	return state.content.shelfItems;
}

export default reducer;

export const {
	addShelfItem,
} = actions;
