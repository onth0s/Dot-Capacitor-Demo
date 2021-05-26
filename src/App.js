import { BrowserRouter } from 'react-router-dom';

import { Map } from './pages/Map.js';
import { Library } from './pages/Library.js';

import { Navigation, Route } from "react-tiger-transition";

function App() {
	return (
		<BrowserRouter>
			<Navigation>
				<Route
					exact path="/"
				><Map /></Route>

				<Route
					exact path="/library"
					screen // shorthand to wrap children with screen
				><Library /></Route>
			</Navigation>
		</BrowserRouter>
	);
}

export default App;
