import { useHistory } from 'react-router';

import { Link, glide } from "react-tiger-transition";

import { SVG } from '../common/SVG.js';
import { icons } from '../../resources/icons.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const MapUI = ({ onClick }) => {
	const history = useHistory();

	const handleCenterView = () => {}
	const handleLocationToggle = () => {}

	return (
		<div className="
			w-full h-full
			absolute top-0 left-0
			pointer-events-none
		"
			onClick={onClick}
		>
			<SVG route={icons.user_map}
				isIcon 

				position={'LEFT'}

				size={['15vw']}
				top={'5vw'} left={'5vw'}

				alt={'user'}
			/>

			<Link to="/library" transition='glide-top'>
				<SVG route={icons.library}
					isIcon 

					size={['15vw']}
					bottom={'5%'}

					alt={'library'}

					onClick={() => history.push('/library')}
				/>
			</Link>


			<SVG route={icons.current_position}
				isIcon noShadow noClickable

				size={['15vw']}
				bottom={'20%'}

				alt={'library'}
			/>
			
			<SVG route={icons.location_enabled}
				isIcon noShadow 

				position={'RIGHT'}

				size={['18vw']}
				bottom={'28%'}

				alt={'library'}

				onClick={handleLocationToggle}
			/>
			<SVG route={icons.center_view}
				isIcon noShadow 

				position={'RIGHT'}

				size={['18vw']}
				bottom={'20%'}

				alt={'library'}

				onClick={handleCenterView}
			/>
		</div>
	);
}
