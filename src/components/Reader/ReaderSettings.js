import { Lightbox } from '../common/Lightbox.js';

export const ReaderSettings = () => {
	const renderPoints = (index) => {
		let points = [];

		for (let i = 0; i < 5; i++) {
			points.push(
				<p>x</p>
			);
		}

		return points;
	}

	const circles = [
		{
			color: 'red'
		},
		{
			color: 'blue'
		},
		{
			color: 'green'
		},
		{
			color: 'black'
		}
	];

	const pills = [
		{
			value: 0.5,
		},
		{
			value: 0.1,
		},
		{
			value: 0.8,
		},
		{
			value: 0.65,
		},
	]

	return (<>
		<Lightbox hidden />

		<div className="bg-purple-900 absolute bottom-0 z-10 text-white"
			style={{
				width: '120vw',
				height: '120vw',

				left: '50%',
				transform: 'translateX(-50%)',

				marginBottom: '-30vw',

				borderRadius: '100%',
				borderBottomRightRadius: '0',
				borderBottomLeftRadius: '0',

				boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
			}}
		>
			<div className="w-10/12 mx-auto px-14 mt-16 space-y-6" style={{
				// marginBottom: '0vw',
			}}>
				<div className="flex justify-between items-end">
					<p className="text-lg font-light">Fuente</p>
					<div className="cursor-pointer">
						<p className="text-2xl font-light">Verdana</p> {/* TODO implementar esto */}
						<div className="flex text-xs space-x-1 justify-end">{renderPoints()}</div>
					</div>
				</div>

				<div className="flex justify-between" style={{ width: 'calc(100% + 10vw)', marginLeft: '-5vw' }}>{circles.map((el, i) => (
					<p className="rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
						style={{ backgroundColor: el.color }}>
						C{i}
					</p>
				))}</div>

				<div className="flex">{pills.map((el, i) => (
					<div className="w-14 bg-purple-400">PILL</div>
				))}</div>
			</div>
		</div>
	</>);
}
