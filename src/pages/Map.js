import { useState, useCallback } from "react";

import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
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

	const [currentCenter, setCurrentCenter] = useState({
		lat: 41.4255,
		lng: 2.1779,
	});
	if (false) setCurrentCenter();

	const [currentZoom, setCurrentZoom] = useState(15.5);
	if (false) setCurrentZoom();

	const [currentPosition, setCurrentPosition] = useState({
		lat: 41.4255,
		lng: 2.1779,
	});
	if (false) setCurrentZoom();

	const stopsIcon = new google.maps.MarkerImage(icons.stop,
		new google.maps.Size(40, 40),
		new google.maps.Point(0, 0),
		new google.maps.Point(20, 40),
		new google.maps.Size(40, 40),
	);
	const currentPositionIcon = new google.maps.MarkerImage(icons.current_position_circle,
		new google.maps.Size(30, 30),
		new google.maps.Point(0, 0),
		new google.maps.Point(15, 15),
		new google.maps.Size(30, 30),
	);

	const circleRadius = 50;
	const circleColorRed = '#FF0000';
	const circleColorGreen = '#00FF00';
	const circleColorBlue = '#FF00FF';

	const [circleColors, setCircleColors] = useState([
		circleColorRed, circleColorRed, circleColorRed, circleColorRed,
	]);

	const circleOptions = {
		strokeWeight: 0,
		fillColor: circleColorBlue,
		// fillOpacity: 0.2,
		fillOpacity: 0, // TODO change
		clickable: false,
		draggable: false,
		editable: false,
		visible: true,
		radius: circleRadius,
		zIndex: 1,
	}

	return (
		<div className="">
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
				<Marker
					position={currentPosition}

					icon={currentPositionIcon}
					zIndex={10}

					draggable

					onDragStart={(e) => {
						// console.log('>> drag start - current position:');
						// console.log(currentPosition);
						console.log(e);
					}}

					onClick={() => {
						

						setCurrentPosition({
							lat: 41.4255,
							lng: 2.1779,
						});
					}}
				/>

				{stops.map((el, i) => {
					return (<div key={i}>
						<Circle
							center={el}
							options={{
								...circleOptions,
								fillColor: circleColors[i]
							}}
						/>
						<Marker position={el} icon={stopsIcon} zIndex={5} />
					</div>)
				})}
			</GoogleMap>

			<MapUI />
		</div>
	);
}
