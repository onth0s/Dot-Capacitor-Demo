import { createSlice } from '@reduxjs/toolkit';

// import { icons } from '../../resources/icons.js';

const { actions, reducer } = createSlice({
	name: 'test',

	initialState: {
		shelfItems: [],
		favoriteItems: [
			// {
			// 	icon: icons.romance,
			// 	image: icons.mountain_placeholder,
			// 	title: 'Título de la obraaa',
			// 	author: 'Autor',
			// 	score: 0.85
			// },
		],

		readerIndex: 0,
	},

	reducers: {
		addShelfItem: (state, { payload }) => {
			const arr = state.shelfItems;
			arr.unshift(payload);

			state.shelfItems = arr;
		},
		addFavoriteItem: (state, { payload }) => {
			const arr = state.favoriteItems;
			arr.unshift(payload);

			state.favoriteItems = arr;
		},

		setReaderIndex: (state, { payload }) => {
			console.log('payload:', payload);
			state.readerIndex = payload;
		}
	}
})

export const getShelfItems = (state) => {
	return state.content.shelfItems;
}
export const getFavoriteItems = (state) => {
	return state.content.favoriteItems;
}

export const getReaderIndex = (state) => {
	return state.content.readerIndex;
}

export default reducer;

export const {
	addShelfItem, addFavoriteItem,
	setReaderIndex,
} = actions;
