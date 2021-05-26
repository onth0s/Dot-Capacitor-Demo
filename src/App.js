import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Map } from './pages/Map.js';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				{/* TODO 
					<Route exact path="/"><LoginPage /></Route> */}
				<Route exact path="/"><Map /></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
