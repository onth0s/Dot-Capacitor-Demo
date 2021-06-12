import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
	name: 'content_name',
	initialState: {
		username: '',
		password: '',

		showPassword: false,
	},
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
