import { Link, glide } from 'react-tiger-transition';
import { Lightbox } from '../common/Lightbox.js'

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const Notification = ({ isVisible, setIsVisible, children }) => {
	return (isVisible ? <>
		<Lightbox
			hidden 
			onClick={() => {
				setIsVisible(false);
			}}
		/>

		<Link to="/reader/" transition='glide-top'>
			<div className="bg-white absolute z-40 shadow-lg"
				style={{
					left: '50%',
					transform: 'translateX(-50%)',
					width: '120vw',
					minHeight: '120vw',
					borderRadius: '100%',
					borderTopRightRadius: '0',
					borderTopLeftRadius: '0',
					marginTop: '-60vw',
				}}
			>
				<div className="w-10/12 mx-auto" style={{
					marginTop: '60vw',
				}}>{children}</div>
			</div>
		</Link>
	</> : <div></div>);
}
