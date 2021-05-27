export const SVG = ({
	onClick, style = {},
	route,
	top, bottom, left, right,
	zIndex = 0,
	size = ['100%', 'auto'], position = 'CENTER',
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

	console.log('style:', style);
	
	return (
		<div className={`
			flex ${position_} items-center
			w-full 
			absolute
		`}
			style={{
				...style,

				top: top ? top : 'auto',
				bottom: bottom ? bottom : 'auto',
				left: left ? left : 'auto',
				right: right ? right : 'auto',

				zIndex: zIndex,
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
