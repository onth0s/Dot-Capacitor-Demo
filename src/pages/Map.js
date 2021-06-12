import { useState, useCallback, useEffect } from "react";

import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
import { mapStyles, containerStyle } from '../resources/mapSettings.js';

import {
	measure,
	getLocation,
	stopsLockedIcon, stopsUnlockedIcon, currentPositionIcon,
} from '../utils/mapUtils.js';

import { MapUI } from '../components/Map/MapUI.js';


import stops from '../resources/h6-stops-v1.json';

import { Notification } from '../components/common/Notification.js';

export const Map = () => {
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

	const [showNotification, setShowNotification] = useState(false);

	const [notification, setNotification] = useState(<div className="p-8 space-y-1">
		<p className="text-yellow-600">Nuevo texto conseguido!</p>
		<p>Haz clic aquí para leerlo o échale un vistazo desde tu biblioteca.</p>
	</div>);

	const [timeoutID, setTimeoutID] = useState(0);

	const renderStopIcon = (i) => {
		return stopsLockedIcon;
	}

	return (<>
		<Notification isVisible={showNotification} setIsVisible={setShowNotification} timeoutID={timeoutID}>{notification}</Notification>

		<div>
			<GoogleMap
				onLoad={onMapLoad}

				mapContainerStyle={containerStyle}
				options={{
					disableDefaultUI: true,
					styles: mapStyles,
					gestureHandling: "greedy",
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
						// TODO remove this
					}}
					onDragEnd={(e) => {
						setCurrentPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });

						for (let i = 0; i < stops.length; i++) {
							const measure_ = measure(
								e.latLng.lat(),
								e.latLng.lng(),

								stops[i].lat,
								stops[i].lng,
							);

							if (measure_ < 35) {
								console.log('INSIDE');
								break;
							}
						};
					}}

					onClick={() => { // TODO Everything here is pretty much just for debugging. Remove eventually.
						setShowNotification(true);
						const timeoutID_ = setTimeout(() => {
							setShowNotification(false);
						}, 4000);

						setTimeoutID(timeoutID_);

						getLocation().then(val => {
							setCurrentPosition({ lat: val.lat, lng: val.lng })
						});
					}}
				/>

				{stops.map((el, i) => {
					return (<div key={i}>
						{/* TODO ↓ remove this, just for debugging */}
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
							icon={stopsLockedIcon}
							zIndex={5}
						/>
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
