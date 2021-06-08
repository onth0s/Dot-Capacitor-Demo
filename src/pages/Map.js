import { useState, useCallback, useEffect } from "react";

import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
import { mapStyles, containerStyle } from '../resources/mapSettings.js';

import {
	// measure,
	getLocation
} from '../utils/mapUtils.js';

import { MapUI } from '../components/Map/MapUI.js';

import { icons } from '../resources/icons.js';

import stops from '../resources/h6-stops-v1.json';

import { Notification } from '../components/common/Notification.js';

export const Map = () => {
	const google = window.google;

	useEffect(() => {
		// TODO ↓ temporary "fix" (not even that)
		(function () {
			if (typeof EventTarget !== "undefined") {
				let func = EventTarget.prototype.addEventListener;
				EventTarget.prototype.addEventListener = function (type, fn, capture) {
					this.func = func;
					if (typeof capture !== "boolean") {
						capture = capture || {};
						capture.passive = false;
					}
					this.func(type, fn, capture);
				};
			};
		}());
	}, []);

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

	const [showNotification, setShowNotification] = useState(false);

	const [notification, setNotification] = useState(<div className="p-8 space-y-3">
		<p className="text-yellow-600">Nuevo texto conseguido!</p>
		<p>Haz clic aquí para leerlo o échale un vistazo desde tu biblioteca.</p>
	</div>);

	return (<>
		<Notification isVisible={showNotification} setIsVisible={setShowNotification}>{notification}</Notification>

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

					onClick={() => { // TODO Everything here is pretty much just for debugging. Remove eventually.
						setNotification(<div className="p-4">
							<p>{new Date().toString()}</p>
						</div>);
						setShowNotification(true);
						setTimeout(() => {
							setShowNotification(false)
						}, 4000);

						getLocation().then(val => {
							setCurrentPosition({ lat: val.lat, lng: val.lng })
						});
					}}
				/>

				{stops.map((el, i) => {
					return (<div key={i}>
						<Circle
							center={el}
							options={{
								strokeWeight: 0,
								fillColor: '#000',
								fillOpacity: 0.1,
								clickable: false,
								draggable: false,
								editable: false,
								visible: true,
								radius: 35,
								zIndex: 1,
							}}
						/>

						<Marker position={el}
							icon={i % 2 === 0 ? stopsLockedIcon : stopsUnlockedIcon}
							zIndex={5} />
					</div>)
				})}
			</GoogleMap>

			<MapUI
				map={map}
				currentPosition={currentPosition} setCurrentPosition={setCurrentPosition}
				setCurrentCenter={setCurrentCenter}
			/>
		</div>
	</>);
}
