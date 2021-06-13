import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
	name: 'content-name',
	
	shelfItems: [
		{
			title: 'Título de la obraaa',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
	],

	reducers: {
		setUsername: (state, { payload }) => {
			state.username = payload;
		},
		setPassword: (state, { payload }) => {
			state.password = payload;
		},

		toggleShowPassword: (state) => {
			state.showPassword = !state.showPassword;
		}
	}
})

export const getUsername = (state) => {
	return state.userCredentials.username;
}

export default reducer;

export const {
	setUsername, setPassword,
	toggleShowPassword
} = actions;
