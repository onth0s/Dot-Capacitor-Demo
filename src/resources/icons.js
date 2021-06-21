import path from 'path';

const icons_noext = {
	// ↓ commor 
	arrow_left: 'common/arrow-left',
	star: 'Library/star-library',
	// ↓ genres
	romance: 'common/genres/romance',
	sci_fi: 'common/genres/sci-fi',
	fable: 'common/genres/fable',
	suspense: 'common/genres/suspense',
	historica: 'common/genres/historica',
	fantasia: 'common/genres/fantasia',
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
	search_input: 'Library/search-input',
	filter: 'Library/filter',
	shelf_empty: 'Library/shelf-empty-state',
	// ↓ Reader
	settings: 'Reader/settings',
	bookmark_on: 'Reader/bookmark_on',
	bookmark_off: 'Reader/bookmark_off',
	line_height: 'Reader/line-height-reader',
	margin: 'Reader/margin-reader',
	size: 'Reader/size-reader',
	selected_circle: 'Reader/selected-circle',
	// ↓ UserProfile
	three_dots: 'UserProfile/three-dots',
	logout: 'UserProfile/logout',
}
export const icons = {}

Object.keys(icons_noext).forEach(el => {
	icons[el] = path.join('./assets', icons_noext[el] + '.svg');
});
