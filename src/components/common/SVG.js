export const SVG = ({
	onClick,
	route,
	top, bottom, left, right,
	size, position = 'CENTER',
	isIcon, noShadow, noClickable,
	alt = '',
}) => {
	let iconStyles = '';

	if (isIcon) {
		let shadow = noShadow ? '' : 'shadow-lg';
		iconStyles = 'rounded-full ' + shadow;
	}

	let position_ = '';
	switch (position) {
		case 'CENTER':
			position_ = 'justify-center';
			break;
		case 'LEFT':
			position_ = 'justify-start';
			break;
		case 'RIGHT':
			position_ = 'justify-end';
			break;
		default:
			console.log('Error: invalid <SVG/> position prop.');
	}

	return (
		<div className={`
			flex ${position_} items-center
			w-full 
			absolute
		`}
			style={{
				top: top ? top : 'auto',
				bottom: bottom ? bottom : 'auto',
				left: left ? left : 'auto',
				right: right ? right : 'auto',
			}}
		>
			<img className={`
				${iconStyles} ${noClickable ? '' : 'cursor-pointer'}
				pointer-events-auto
			`}
				style={{ width: size[0], height: size[1] }}

				src={route} alt={alt}
				onClick={onClick}
			/>
		</div>
	);
}
