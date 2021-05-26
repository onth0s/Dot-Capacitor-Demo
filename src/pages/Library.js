import { Link, glide } from "react-tiger-transition";

import { SVG } from '../components/common/SVG.js';
import { icons } from '../resources/icons.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const Library = () => {
	return (
		<div>
			<Link to="/" transition='glide-bottom'>
				<SVG route={icons.library}
					isIcon

					size={['15vw']}
					bottom={'5%'}

					alt={'library'}
				/>
			</Link>
		</div>
	);
}
