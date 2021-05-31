import path from 'path';

const icons_noext = {
	arrow_left: 'common/arrow-left',
	// ↓ Map -----------------------------------------------
	current_position: 'Map/current-position',
	current_position_circle: 'Map/current-position-circle',
	user_map: 'Map/user-map',
	library: 'Map/library',
	stop: 'Map/stop',
	center_view: 'Map/center-view',
	location_enabled: 'Map/location-enabled',
}
export const icons = {}

Object.keys(icons_noext).forEach(el => {
	icons[el] = path.join('./assets', icons_noext[el] + '.svg');
});
