import { Icon } from '../common/Icon.js';
import { icons } from '../../resources/icons.js';

export const MapUI = ({ onClick }) => {
	return (
		<div className="
			w-full h-full
			absolute top-0 left-0
			pointer-events-none
		"
			onClick={onClick}
		>
			<Icon route={icons.library} 
				size={['15vw']}
				bottom={'5%'} 
				// right={'-30%'}
			/>
		</div>
	);
}
