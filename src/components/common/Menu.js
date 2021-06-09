export const Menu = ({ isVisible, list, position = { top: '5.5vh', right: '5vw' }, icon, clickHandlers }) => {
	return (isVisible &&
		<div className="absolute z-20 bg-white rounded-xl w-48 py-2"
			style={{
				top: position.top ? position.top : 'auto',
				bottom: position.bottom ? position.bottom : 'auto',
				left: position.left ? position.left : 'auto',
				right: position.right ? position.right : 'auto',

				boxShadow: '0 2px 9px rgba(0,0,0,0.15)',
			}}
		>
			{list.map((el, i) => (
				<div key={i} className="flex items-center font-light text-sm	pl-8 py-2 cursor-pointer space-x-1"
					onClick={() => clickHandlers[i]}					
				>
					<img className="w-6 pb-0.5" src={icon} alt="" />
					<p>{el}</p>
				</div>
			))}
		</div>
	);
}
