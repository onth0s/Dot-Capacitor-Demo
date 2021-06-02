import { useState } from 'react';
import { useHistory } from 'react-router';

import { Link, glide } from "react-tiger-transition";

import { SVG } from '../common/SVG.js';
import { icons } from '../../resources/icons.js';

import {
	showGeolocationError,
} from '../../utils/mapUtils.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const MapUI = ({
	map,
	currentPosition, setCurrentPosition,
	setCurrentCenter,
}) => {
	const history = useHistory();

	const handleCenterView = () => {
		setCurrentCenter({ lat: currentPosition.lat, lng: currentPosition.lng });
	}

	const isUserLocked = false; // TODO ← hardcoded, to implement
	const [watchID, setWatchID] = useState(0);

	const handleLocationToggle = () => {
		setIsLocationEnabled(!isLocationEnabled);

		if (!isLocationEnabled) {
			const watchID_ = navigator.geolocation.watchPosition((position) => {
				setCurrentPosition({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			}, (error) => {
				showGeolocationError(error);
			}, {
				enableHighAccuracy: true,
				// timeout: 100,
				// maximumAge: 0, // ← default value
			});
			setWatchID(watchID_);
		} else {
			navigator.geolocation.clearWatch(watchID);
		}
	}

	const [isLocationEnabled, setIsLocationEnabled] = useState(false);

	return (
		<div className="
			w-full h-full
			absolute top-0 left-0
			pointer-events-none
		">
			<SVG route={isUserLocked ? icons.user_map_locked : icons.user_map} isIcon
				position={'LEFT'}
				size={['15vw']}
				top={'5vw'} left={'5vw'}

				alt={'user'}
			/>

			<Link to="/library" transition='glide-top'>
				<SVG route={icons.library} alt={'library'} isIcon
					size={['15vw']}
					bottom={'5%'}

					onClick={() => history.push('/library')}
				/>
			</Link>

			<SVG route={isLocationEnabled ? icons.location_enabled : icons.location_disabled}
				alt={'library'} isIcon

				position={'RIGHT'}

				size={['12vw']}
				bottom={'28%'} right={'3%'}

				onClick={handleLocationToggle}
			/>
			<SVG route={icons.center_view} alt={'library'} isIcon
				position={'RIGHT'}
				size={['12vw']}
				bottom={'20%'} right={'3%'}

				onClick={handleCenterView}
			/>
		</div>
	);
}
