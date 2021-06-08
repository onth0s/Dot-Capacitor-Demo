export const SVG = ({
	children,
	onClick, style = {}, innerStyle = {},
	route,
	top, bottom, left, right,
	zIndex = 0,
	size = ['100%', 'auto'], maxSize = ['100%', 'auto'],
	position = 'CENTER',
	isIcon, noShadow, noClickable, maxContent, 
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
			${maxContent || position !== 'CENTER' ? 'w-max' : 'w-full'}
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
				style={{
					...innerStyle,

					width: size[0], height: size[1],
					maxWidth: maxSize[0], maxHeight: maxSize[1],
				}}

				src={route} alt={alt}
				onClick={onClick}
			/>

			{children}
		</div>
	);
}
