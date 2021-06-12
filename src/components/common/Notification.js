import { Link, glide } from 'react-tiger-transition';
import { Lightbox } from '../common/Lightbox.js'

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const Notification = ({ isVisible, setIsVisible, children, timeoutID }) => {
	return (isVisible ? <>
		<Lightbox
			hidden
			onClick={() => {
				setIsVisible(false);
				clearTimeout(timeoutID);
			}}
		/>

		<Link to="/reader/" transition='glide-top'>
			<div className="bg-white absolute z-40 shadow-md">
				{children}
			</div>
		</Link>
	</> : <div></div>);
}
