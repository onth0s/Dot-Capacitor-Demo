import path from 'path';

const icons_noext = {
	current_position: 'Map/current-position',
	user_map: 'Map/user-map',
	library: 'Map/library',
	stop: 'Map/stop',
}
export const icons = {}

Object.keys(icons_noext).forEach(el => {
	icons[el] = path.join('./assets', icons_noext[el] + '.svg');
});
