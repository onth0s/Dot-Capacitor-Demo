import { useHistory } from 'react-router';

import { SVG } from '../common/SVG.js';
import { icons } from '../../resources/icons.js';

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

			<SVG route={icons.library}
				isIcon

				size={['15vw']}
				bottom={'5%'}
				
				alt={'library'}

				onClick={() => history.push('/library')}
			/>
			
			<SVG route={icons.current_position}
				isIcon noShadow noClickable

				size={['15vw']}
				bottom={'20%'}
				
				alt={'library'}
			/>
		</div>
	);
}
