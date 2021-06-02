export const measure = (lat1, lon1, lat2, lon2) => {
	var R = 6378.137;

	var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
	var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
		Math.sin(dLon / 2) * Math.sin(dLon / 2);

	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;

	return d * 1000;
}

// ↓ geolocation error handling, sorta
export const showGeolocationError = (error) => {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			alert("User denied the request for Geolocation.");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("Location information is unavailable.");
			break;
		case error.TIMEOUT:
			alert("The request to get user location timed out.");
			break;
		case error.UNKNOWN_ERROR:
			alert("An unknown error occurred.");
			break;
		default:
			alert("A very unknown error occurred.");
			break;
	}
}

// TODO geolocation code goes here
export const getLocation = async () => {
	// TODO so this is how you're supposed to use Promise objects
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((location) => {
			resolve(location);
		}, reject);
	}, (error) => {
		showGeolocationError(error)
	}, {
		enableHighAccuracy: true,
		// timeout: 2000,
		// maximumAge: 0, // ← default value
	});

	return { lat: pos.coords.latitude, lng: pos.coords.longitude };
}
