import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
	name: 'test',

	initialState: {
		shelfItems: [],

		readerIndex: 0,
	},

	reducers: {
		addShelfItem: (state, { payload }) => {
			const arr = state.shelfItems;
			arr.unshift(payload);

			state.shelfItems = arr;
		},

		setReaderIndex: (state, { payload }) => {
			state.readerIndex = payload;
		}
	}
})

export const getShelfItems = (state) => {
	return state.content.shelfItems;
}

export const getReaderIndex = (state) => {
	return state.content.readerIndex;
}

export default reducer;

export const {
	addShelfItem,
	setReaderIndex,
} = actions;
