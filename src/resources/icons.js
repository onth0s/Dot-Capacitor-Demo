const icons_noext = {
	library: './assets/Map/library',
	stop: './assets/Map/stop',
}
export const icons = {}

Object.keys(icons_noext).forEach(el => {
	icons[el] = icons_noext[el] + '.svg';
});
