export const Lightbox = ({ hidden = false, onClick, children }) => {
	return (<div className={`w-screen ${!hidden ? '' : 'bg-black'} opacity-25 absolute`} style={{
		height: '100px',
	}}
		onClick={onClick}
	></div>
	);
}
