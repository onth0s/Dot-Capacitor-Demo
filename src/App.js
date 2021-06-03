import { BrowserRouter } from 'react-router-dom';

import { Map } from './pages/Map.js';
import { Library } from './pages/Library.js';
import { UserProfile } from './pages/UserProfile.js';
import { Reader } from './pages/Reader.js';

import { Navigation, Route, glide } from "react-tiger-transition";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
/* test */
function App() {
	return (
		<BrowserRouter>
			<Navigation>
				<Route exact path="/"><Map /></Route>
				<Route exact path="/user-profile"><UserProfile /></Route>
				<Route exact path="/library"><Library /></Route>
				<Route path="/reader"><Reader /></Route>
			</Navigation>
		</BrowserRouter>
	);
}

export default App;
