import { Link, glide } from "react-tiger-transition";

import { SVG } from '../components/common/SVG.js';
import { icons } from '../resources/icons.js';
import { backgrounds } from '../resources/backgrounds.js';

import { consts } from '../resources/constants.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const Library = () => {
	return (
		<div>
			<SVG route={backgrounds.cloud_library}
				alt={'library background cloud'}
				size={['100vw', '20vh']}
			/>

			<Link to="/" transition='glide-bottom'>
				<SVG route={icons.arrow_left} alt={'go back arrow'} maxContent
					size={[consts.corner_btn.size.width]}
					position={'LEFT'}
					top={consts.corner_btn.top}
					left={consts.corner_btn.left}
				>
					<p className="
						ml-2
						text-lg
						text-white
					">Biblioteca</p>					
				</SVG>
			</Link>
		</div>
	);
}
