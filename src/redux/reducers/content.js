import { createSlice } from '@reduxjs/toolkit';

import { icons } from '../../resources/icons.js';

import verne from '../../resources/MPVContent/verne.json';
import _1984 from '../../resources/MPVContent/_1984.json';

const { actions, reducer } = createSlice({
	name: 'test',

	initialState: {
		shelfItems: [
			{
				title: verne.title,
				author: 'Julio Verne',
				icon: icons.sci_fi,
				time_ago: 0,
				time_lenght: 8,
				text: verne.text
			},
			{
				title: _1984.title,
				author: 'George Orwell',
				icon: icons.sci_fi,
				time_ago: 0,
				time_lenght: 8,
				text: _1984.text
			},
		],
		favoriteItems: [
			{
				image: './assets/Library/Catalog/janne.png',
				title: 'Juana de Arco',
				author: 'Mark Twain',
				genre: icons.historica,
			},
			{
				image: './assets/Library/Catalog/abstract.png',
				title: '1984',
				author: 'George Orwell',
				genre: icons.sci_fi,
			},
			{
				image: './assets/Library/Catalog/b&w.png',
				title: 'Las Tres Hilanderas',
				author: 'Hermanos Grimm',
				genre: icons.historica,
			},
			{
				image: './assets/Library/Catalog/cat.png',
				title: 'El Gato Negro',
				author: 'Edgar Allan Poe',
				genre: icons.suspense,
			},
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
		removeFavoriteItem: (state, { payload }) => {
			// const arr = state.favoriteItems;
			// arr.unshift(payload);

			// state.favoriteItems = arr;

			console.log('removing favorite item code here...');
		}, // TODO not sure this is necessary

		setReaderIndex: (state, { payload }) => {
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
	addShelfItem,
	addFavoriteItem, removeFavoriteItem,
	setReaderIndex,
} = actions;
