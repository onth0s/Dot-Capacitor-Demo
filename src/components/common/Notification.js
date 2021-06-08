import { Lightbox } from '../common/Lightbox.js'

export const Notification = ({ isVisible, children }) => {
	return (isVisible ? <>
		<Lightbox hidden />

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
	</> : <div></div>);
}
