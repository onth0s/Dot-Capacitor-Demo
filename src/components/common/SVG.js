export const SVG = ({
	onClick,
	route,
	top, bottom, left, right,
	size,
	isIcon, noShadow, noClickable,
	alt = '',
}) => {
	let iconStyles = '';

	if (isIcon) {
		let shadow = noShadow ? '' : 'shadow-lg';
		iconStyles = 'rounded-full ' + shadow;
	}

	return (
		<div className="
			flex justify-center items-center
			w-full r
			absolute
		"
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
