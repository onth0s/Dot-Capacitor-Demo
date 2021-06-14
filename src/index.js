import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/.global.css';
import 'react-tiger-transition/styles/main.min.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import store from './redux/store.js';

const theme = createMuiTheme({
	palette: {
		primary: {
			"500": "#EC6408",
		},
		secondary: {
			"A400": "#6f65bb",
		},
	},
});

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
	, document.getElementById('root')
);
