import path from 'path';

const icons_noext = {
	// ↓ commor 
	arrow_left: 'common/arrow-left',
	// ↓ genres
	romance: 'common/genres/romance',
	fable: 'common/genres/fable',
	// ↓ Map -----------------------------------------------
	current_position: 'Map/current-position',
	current_position_circle: 'Map/current-position-circle',
	user_map: 'Map/user-map',
	user_map_locked: 'Map/user-map-locked',
	library: 'Map/library',
	stop_locked: 'Map/stop-locked',
	stop_unlocked: 'Map/stop-unlocked',
	center_view: 'Map/center-view',
	location_enabled: 'Map/location-enabled',
	location_disabled: 'Map/location-disabled',
	// ↓ Library
	mountain_placeholder: 'Library/mountain-placeholder',
	search: 'Library/search',
	// ↓ Reader
	bookmark_on: 'Reader/bookmark_on',
	bookmark_off: 'Reader/bookmark_off',
}
export const icons = {}

Object.keys(icons_noext).forEach(el => {
	icons[el] = path.join('./assets', icons_noext[el] + '.svg');
});
