import { BrowserRouter } from 'react-router-dom';

import { Map } from './pages/Map.js';
import { Library } from './pages/Library.js';

import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

const screenStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
};

function App() {
	return (
		<BrowserRouter>
			{/* <Switch>
				<Route exact path="/"><Map /></Route>

				<Route exact path="/library"><Library /></Route>
			</Switch> */}

			<Navigation>
				<Route
					exact path="/"
					screen // shorthand to wrap children with screen
					screenProps={{
						style: {
							backgroundColor: "#AADDAA",
							...screenStyle
						}
					}}
				>
					<Link to="/a" transition='glide-top'>NEXT NEXT NEXT</Link>
				</Route>

				<Route
					exact path="/a"
					screen // shorthand to wrap children with screen
					screenProps={{
						style: {
							backgroundColor: "#607d8b",
							...screenStyle
						}
					}}
				>
					<Link to="/" transition='glide-bottom'>BACK BACK BACK</Link>
				</Route>
			</Navigation>
		</BrowserRouter>
	);
}

export default App;
