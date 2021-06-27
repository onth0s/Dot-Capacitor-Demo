import { useState, useCallback, useEffect } from "react";

import { GoogleMap, Marker } from '@react-google-maps/api';
import { mapStyles, containerStyle } from '../resources/mapSettings.js';

import { measure, getLocation, stopsLockedIcon, stopsUnlockedIcon, currentPositionIcon } from '../utils/mapUtils.js';

import { MapUI } from '../components/Map/MapUI.js';

import { icons } from '../resources/icons.js';

import stops from '../resources/h6-stops-v1.json';

import { Notification } from '../components/common/Notification.js';

import {
	// getFables,
	getRandomContent,
} from '../utils/serverQueries.js';

import { useDispatch } from 'react-redux';
import { addShelfItem } from '../redux/reducers/content.js';

let randomContentCounter = 0;

export const Map = () => {
	const dispatch = useDispatch();

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

	const [notification, setNotification] = useState(
		<div className="p-8 space-y-1 w-screen">
			<p className="text-yellow-600">Nuevo texto conseguido!</p>
			<p>¡Échale un vistazo desde tu biblioteca!</p>
		</div>
	);

	const [timeoutID, setTimeoutID] = useState(0);

	const [stopsStatus, setStopsStatus] = useState(stops.map(() => false));

	const renderStopIcon = (i) => {
		return stopsStatus[i] ? stopsUnlockedIcon : stopsLockedIcon;
	}

	const getGenreIcon = (genre) => {
		switch (genre) {
			case 'FABULA':
				return {
					icon: icons.fable,
					genre: icons.fable,
				}
			case 'SCIFI':
				return {
					icon: icons.sci_fi,
					genre: icons.sci_fi,
				}
			case 'HISTORICA':
				return {
					icon: icons.historica,
					genre: icons.historica,
				}
			case 'ROMANCE':
				return {
					icon: icons.romance,
					genre: icons.romance,
				}
			case 'FANTASIA':
				return {
					icon: icons.fantasia,
					genre: icons.fantasia,
				}
			case 'SUSPENSE':
				return {
					icon: icons.suspense,
					genre: icons.suspense,
				}
			case 'COMEDIA':
				return {
					icon: icons.comedia,
					genre: icons.comedia,
				}
			case 'TRAGEDIA':
				return {
					icon: icons.tragedia,
					genre: icons.tragedia,
				}
			case 'ACTUALIDAD':
				return {
					icon: icons.actualidad,
					genre: icons.actualidad,
				}
			default:
		}
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
					minZoom: 15.5, maxZoom: 22,
					// minZoom: 10, maxZoom: 22,
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

					onDragEnd={(e) => {
						setCurrentPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });

						for (let i = 0; i < stops.length; i++) {
							const measure_ = measure(
								e.latLng.lat(), e.latLng.lng(),
								stops[i].lat, stops[i].lng,
							);

							if (measure_ < 35) {
								if (!stopsStatus[i]) { // TODO here goes the 'content' fetching
									getRandomContent().then(val => {
										console.log(`New Random Content Unlocked! (${randomContentCounter++})`);
										console.log(val);

										setNotification(<div className="p-8 space-y-1 w-screen">
											<p className="text-yellow-600">Nuevo texto conseguido!</p>
											<p className="font-semiboldold italic">{val.title}</p>
											<p>¡Échale un vistazo desde tu biblioteca!</p>
										</div>);

										setShowNotification(true);
										const timeoutID_ = setTimeout(() => {
											setShowNotification(false);
										}, 4000); setTimeoutID(timeoutID_);


										// const genreIcon = {
										// 	icon: icons.fable,
										// 	genre: icons.fable,
										// }

										const randomContent = {
											title: val.title,
											author: val.author,
											...getGenreIcon(val.genre),
											time_ago: 0, // TODO not sure how hard is this gonna be
											time_lenght: Math.ceil(val.text.join(' ').split(' ').length / 250),
											text: val.text,
											image: val.image,
											score: val.score,
										};

										// ↓ redux
										dispatch(addShelfItem(randomContent));
									}).catch(err => {
										console.log('Error getting random content:');
										console.log(err);
									});
								}

								const arr = stopsStatus;
								arr[i] = true; setStopsStatus([...arr]);
							}
						};
					}}

					onClick={() => { // TODO Everything here is pretty much just for debugging. Remove eventually.
						getLocation().then(val => {
							setCurrentPosition({ lat: val.lat, lng: val.lng })
						});
					}}
				/>

				{stops.map((el, i) => {
					return (<div key={i}>
						<Marker position={el}
							icon={renderStopIcon(i)}
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
