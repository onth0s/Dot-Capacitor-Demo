export const Menu = ({ isVisible, list }) => {
	return (isVisible &&
		<div className="absolute z-20 bg-white rounded-xl top-10 right-4 w-48 py-2"
			style={{ boxShadow: '0 2px 9px rgba(0,0,0,0.15)' }}
		>
			{list.map((el, i) => (
				<div key={i} className="font-light text-sm	pl-8 py-2 cursor-pointer"
				>{el}</div>
			))}
		</div>
	);
}
