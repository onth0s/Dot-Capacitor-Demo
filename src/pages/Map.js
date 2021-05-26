import { useState, useCallback } from "react";

import {
	GoogleMap,
	useJsApiLoader,
} from '@react-google-maps/api';

import { mapStyles, containerStyle } from '../resources/mapSettings.js';

import { MapUI } from '../components/Map/MapUI.js';

export const Map = () => {
	// TODO ↓ I believe this fixes some error when the map doesn't load properly
	// const google = window.google;

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyAJ5dr1lCBf385oMdnC_v6AF05q01DTK_Y'
	});

	const [map, setMap] = useState(null);
	const onMapLoad = useCallback((map) => setMap(map), []);

	const [currentCenter, setCurrentCenter] = useState({
		lat: 41.4255,
		lng: 2.1779,
	});
	if (false) setCurrentCenter();

	const [currentZoom, setCurrentZoom] = useState(15.5);
	if (false) setCurrentZoom();

	return isLoaded ? (
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

			</GoogleMap>

			<MapUI 
				onClick={() => {
					console.log('test');
				}}
			/>
		</div>
	) : <></>
}
