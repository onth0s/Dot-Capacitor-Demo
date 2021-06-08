import { consts } from "../resources/constants";
import { icons } from "../resources/icons";

import { SVG } from '../components/common/SVG.js'
import { Link, glide } from "react-tiger-transition";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
// TODO
export const UserProfile = () => {
	return (
		<div className="bg-gradient-to-t from-yellow-500 to-yellow-600 h-full">
			<Link to='/' transition='glide-bottom'>
				<SVG route={icons.arrow_left} alt={'back arrow'}
					size={[consts.corner_btn.size.width]}
					position={'LEFT'}
					left={consts.corner_btn.left}
					top={consts.corner_btn.top}
				/>
			</Link>
			<SVG route={icons.three_dots} alt={'three dots'}
				size={[consts.corner_btn.size.width]}
				position={'RIGHT'}
				right={consts.corner_btn.right}
				top={consts.corner_btn.top}
			/>

			<div className="w-full flex justify-center pt-12 pb-2">
				<img src={'./assets/UserProfile/user-profile-pic.jpg'} alt="user profile" className="rounded-full w-3/12" />
			</div>

			<p className="w-8/12 text-center mx-auto">Marialala</p>

			<div className="flex justify-center items-center mt-2 w-11/12 mx-auto">
				<p className="w-1/2 text-center">43 Km</p>
				<div className="bg-white rounded-full h-16 w-0.5" />
				<p className="w-1/2 text-center">54</p>
			</div>
		</div>
	);
}
