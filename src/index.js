import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/.global.css';
import 'react-tiger-transition/styles/main.min.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

// const handlePermission = () => {
// 	navigator.permissions.query({ name: 'geolocation' }).then(res => {
// 		// console.log(res.state);
// 	});
// }

// handlePermission();

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
	, document.getElementById('root')
);
