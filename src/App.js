import { BrowserRouter } from 'react-router-dom';

import { Map } from './pages/Map.js';
import { Library } from './pages/Library.js';

import { Navigation, Route, glide } from "react-tiger-transition";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

function App() {
	return (
		<BrowserRouter>
			<Navigation>
				<Route exact path="/"><Map /></Route>

				<Route exact path="/library"><Library /></Route>
			</Navigation>
		</BrowserRouter>
	);
}

export default App;
