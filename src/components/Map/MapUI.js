import { useState } from 'react';
import { useHistory } from 'react-router';

import { Link, glide } from "react-tiger-transition";

import { SVG } from '../common/SVG.js';
import { icons } from '../../resources/icons.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const MapUI = ({
	map,
	currentPosition, setCurrentCenter,
}) => {
	const history = useHistory();

	const handleCenterView = () => {
		setCurrentCenter({
			lat: currentPosition.lat,
			lng: currentPosition.lng,
		});
	}
	const handleLocationToggle = () => {
		setIsLocationEnabled(!isLocationEnabled);
	}

	const [isLocationEnabled, setIsLocationEnabled] = useState(true);

	return (
		<div className="
			w-full h-full
			absolute top-0 left-0
			pointer-events-none
		">
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

			<SVG route={isLocationEnabled
				? icons.location_enabled
				: icons.location_disabled
			}
				isIcon

				position={'RIGHT'}

				size={['12vw']}

				bottom={'28%'}
				right={'3%'}

				alt={'library'}

				onClick={handleLocationToggle}
			/>
			<SVG route={icons.center_view}
				isIcon

				position={'RIGHT'}

				size={['12vw']}

				bottom={'20%'}
				right={'3%'}

				alt={'library'}

				onClick={handleCenterView}
			/>
		</div>
	);
}
