import { createSlice } from '@reduxjs/toolkit';

import { icons } from '../../resources/icons.js';

import verne from '../../resources/MPVContent/verne.json';
import _1984 from '../../resources/MPVContent/_1984.json';
import hilanderas from '../../resources/MPVContent/hilanderas.json';
import janne from '../../resources/MPVContent/janne.json';
import cat from '../../resources/MPVContent/cat.json';
import dictador from '../../resources/MPVContent/dictador.json';

const { actions, reducer } = createSlice({
	name: 'test',

	initialState: {
		shelfItems: [
			{
				title: cat.title,
				author: 'Edgar Allan Poe',
				icon: icons.sci_fi,
				time_ago: 0,
				time_lenght: 8,
				text: cat.text,

				image: './assets/Library/Catalog/cat.png',

				isNew: false,
				isBookmarked: false,
			},
			{
				title: hilanderas.title,
				author: 'Hermanos Grimm',
				icon: icons.fantasia,
				time_ago: 0,
				time_lenght: 8,
				text: hilanderas.text,

				image: './assets/Library/Catalog/b&w.png',

				isNew: false,
				isBookmarked: false,
			},
			{
				title: verne.title,
				author: 'Julio Verne',
				icon: icons.sci_fi,
				time_ago: 0,
				time_lenght: 8,
				text: verne.text,

				image: './assets/Library/Catalog/fantasy.png',

				isNew: false,
				isBookmarked: false,
			},
			{
				title: dictador.title,
				author: 'Charles Chaplin',
				icon: icons.historica,
				time_ago: 0,
				time_lenght: 1,
				text: dictador.text,

				image: './assets/Library/Catalog/chaplin.png',

				isNew: false,
				isBookmarked: false,
			},
			{
				title: _1984.title,
				author: 'George Orwell',
				icon: icons.sci_fi,
				time_ago: 0,
				time_lenght: 8,
				text: _1984.text,

				image: './assets/Library/Catalog/abstract.png',

				isNew: false,
				isBookmarked: false,
			},
			{
				title: janne.title,
				author: 'Mark Twain',
				icon: icons.historica,
				time_ago: 0,
				time_lenght: 8,
				text: janne.text,

				image: './assets/Library/Catalog/janne.png',

				isNew: false,
				isBookmarked: false,
			},
		],
		favoriteItems: [
			// {
			// 	image: './assets/Library/Catalog/janne.png',
			// 	title: 'Juana de Arco',
			// 	author: 'Mark Twain',
			// 	genre: icons.historica,
			// },
			// {
			// 	image: './assets/Library/Catalog/abstract.png',
			// 	title: '1984',
			// 	author: 'George Orwell',
			// 	genre: icons.sci_fi,
			// },
			// {
			// 	image: './assets/Library/Catalog/b&w.png',
			// 	title: 'Las Tres Hilanderas',
			// 	author: 'Hermanos Grimm',
			// 	genre: icons.historica,
			// },
			// {
			// 	image: './assets/Library/Catalog/cat.png',
			// 	title: 'El Gato Negro',
			// 	author: 'Edgar Allan Poe',
			// 	genre: icons.suspense,
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
		setShelfItem: (state, { payload }) => {

		},
		addFavoriteItem: (state, { payload }) => {
			const arr = state.favoriteItems;
			arr.unshift(payload);

			state.favoriteItems = arr;

			state.shelfItems[payload.index] = {
				...state.shelfItems[payload.index],
				isBookmarked: !state.shelfItems[payload.index].isBookmarked,
			}
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
	addShelfItem, setShelfItem,
	addFavoriteItem, removeFavoriteItem,
	setReaderIndex,
} = actions;
