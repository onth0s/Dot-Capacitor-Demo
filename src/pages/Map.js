import { useState, useCallback } from "react";

import { GoogleMap, Marker } from '@react-google-maps/api';
import { mapStyles, containerStyle } from '../resources/mapSettings.js';

import { measure } from '../utils/mapUtils.js';

import { MapUI } from '../components/Map/MapUI.js';

import { icons } from '../resources/icons.js';

import stops from '../resources/h6-stops-v1.json';

export const Map = () => {
	const google = window.google;

	let [map, setMap] = useState(null);
	if (false) console.log(map); // TODO ← remove this
	const onMapLoad = useCallback((map) => setMap(map), []);

	const [currentCenter, setCurrentCenter] = useState({ lat: 41.4255, lng: 2.1779 });
	if (false) setCurrentCenter();

	const [currentZoom, setCurrentZoom] = useState(15.5);
	if (false) setCurrentZoom();

	const [currentPosition, setCurrentPosition] = useState({ lat: 41.4255, lng: 2.1779 });
	if (false) setCurrentZoom(); // TODO ← remove this

	const stopsLockedIcon = new google.maps.MarkerImage(icons.stop_locked,
		new google.maps.Size(40, 40), new google.maps.Point(0, 0),
		new google.maps.Point(20, 40), new google.maps.Size(40, 40),
	);
	const stopsUnlockedIcon = new google.maps.MarkerImage(icons.stop_unlocked,
		new google.maps.Size(40, 40), new google.maps.Point(0, 0),
		new google.maps.Point(20, 40), new google.maps.Size(40, 40),
	);
	const currentPositionIcon = new google.maps.MarkerImage(icons.current_position_circle,
		new google.maps.Size(30, 30), new google.maps.Point(0, 0),
		new google.maps.Point(15, 15), new google.maps.Size(30, 30),
	);


	return (
		<div>
			<GoogleMap
				onLoad={onMapLoad}

				mapContainerStyle={containerStyle}
				options={{
					disableDefaultUI: true,
					styles: mapStyles,
					// minZoom: 15.5, maxZoom: 22,
					minZoom: 10, maxZoom: 22,
					rotateControl: true,
				}}

				zoom={currentZoom}
				center={currentCenter}
			>
				{/* ↓ user current position */}
				<Marker draggable
					position={currentPosition}

					icon={currentPositionIcon}
					zIndex={10}

					onDragStart={(e) => {
						// console.log('>> drag start - current position:');
						// console.log(currentPosition);
						// console.log(e);
					}}
					onDragEnd={(e) => {
						setCurrentPosition({ lat: e.latLng.lat(), lng: e.latLng.lng(), })
					}}

					onClick={() => {
						
					}}
				/>

				{stops.map((el, i) => {
					return (<div key={i}>
						<Marker position={el}
							icon={i % 2 === 0
								? stopsLockedIcon
								: stopsUnlockedIcon
							}
							zIndex={5} />
					</div>)
				})}
			</GoogleMap>

			<MapUI
				map={map}
				currentPosition={currentPosition}
				setCurrentCenter={setCurrentCenter}
			/>
		</div>
	);
}
