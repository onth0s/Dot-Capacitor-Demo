export const Icon = ({
	onClick,
	route,
	top, bottom, left, right,
	size,
}) => {
	return (
		<div className="
			flex justify-center items-center
			w-full
			absolute
		"
			style={{
				top:    top    ? top    : 'auto',
				bottom: bottom ? bottom : 'auto',
				left:   left   ? left   : 'auto',
				right:  right  ? right  : 'auto',
			}}
		>
			<img className="
				cursor-pointer	pointer-events-auto
			"
				style={{ width: size[0], height: size[1] }}

				src={route} alt=""
				onClick={onClick}
			/>
		</div>
	);
}
