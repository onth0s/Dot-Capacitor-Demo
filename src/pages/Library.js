import { Link, glide } from "react-tiger-transition";

import { SVG } from '../components/common/SVG.js';
import { icons } from '../resources/icons.js';
import { backgrounds } from '../resources/backgrounds.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const Library = () => {
	return (
		<div>
			<SVG route={backgrounds.cloud_library}
				alt={'library background cloud'}
			/>
			
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
