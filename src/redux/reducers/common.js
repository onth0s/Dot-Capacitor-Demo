import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
	name: 'test',

	initialState: {
		libraryTabIndex: 0,
	},

	reducers: {
		setLibraryTabIndex: (state, { payload }) => {
			if (typeof (payload) === 'number') {
				state.libraryTabIndex = payload;
			} else {
				// throw new Exception(); // TODO something like this
				console.log('Error: libraryTabIndex must be a number!');
			}
		},
	}
}); export default reducer;

export const getLibraryTabIndex = (state) => {
	return state.content.libraryTabIndex;
}

export const {
	setLibraryTabIndex,
} = actions;
