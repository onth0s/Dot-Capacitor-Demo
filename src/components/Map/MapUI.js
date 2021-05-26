import { useHistory } from 'react-router';

import { Link, glide } from "react-tiger-transition";

import { SVG } from '../common/SVG.js';
import { icons } from '../../resources/icons.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const MapUI = ({ onClick }) => {
	const history = useHistory();

	return (
		<div className="
			w-full h-full
			absolute top-0 left-0
			pointer-events-none
		"
			onClick={onClick}
		>
			<SVG route={icons.user_map}
				isIcon 

				size={['15vw']}
				top={'3%'} left={'-38vw'}

				alt={'user'}
			/>

			<Link to="/library" transition='glide-top'>
				<SVG route={icons.library}
					isIcon

					size={['15vw']}
					bottom={'5%'}

					alt={'library'}

					onClick={() => history.push('/library')}
				/>
			</Link>


			<SVG route={icons.current_position}
				isIcon noShadow noClickable

				size={['15vw']}
				bottom={'20%'}

				alt={'library'}
			/>
		</div>
	);
}
