import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
	name: 'test',

	initialState: {
		settings: {

		},
	},

	reducers: {
		setSettings: (state, { payload }) => {
			
		},
	}
}); export default reducer;

export const getSettings = (state) => {
	return state.Reader.settings;
}

export const {
	setSettings,
} = actions;
