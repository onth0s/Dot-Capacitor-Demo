import { consts } from "../resources/constants";
import { icons } from "../resources/icons";

import { SVG } from '../components/common/SVG.js'

export const UserProfile = () => {
	return (
		<div className="bg-gradient-to-t from-yellow-500 to-yellow-600">
			<SVG route={icons.arrow_left} alt={'back arrow'}
				size={[consts.corner_btn.size.width]}
				position={'LEFT'}
				left={consts.corner_btn.left}
				top={consts.corner_btn.top}
			/>	
			<SVG route={icons.three_dots} alt={'three dots'}
				size={[consts.corner_btn.size.width]}
				position={'RIGHT'}
				right={consts.corner_btn.right}
				top={consts.corner_btn.top}
			/>	

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ut quis voluptates harum laboriosam, voluptate totam, voluptatum perferendis officiis enim atque expedita neque. Laudantium aspernatur hic officia. Eum, totam doloremque.</p>
		</div>
	);
}
