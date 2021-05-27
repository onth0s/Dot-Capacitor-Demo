import path from 'path';

const backgrounds_noext = {
	cloud_library: 'Library/cloud-library',
}
export const backgrounds = {}

Object.keys(backgrounds_noext).forEach(el => {
	backgrounds[el] = path.join('./assets', backgrounds_noext[el] + '.svg');
});
