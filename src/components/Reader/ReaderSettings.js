import { useState } from 'react';

export const ReaderSettings = ({ isVisible, setIsVisible }) => {
	/* 
		TODO
		Para implementar el 'slider' se puede hacer un apaño haciendo que el contenido de la pastilla esté compuesto por 'muchos' <div/>, tal que cuando 'cliques' (o drag, touch, etc) en uno, se ilumine este y todos los que están debajo, creando así la sensación de 'slider'
		TODO
	*/ 
	
	const renderPoints = (index) => {
		let points = [];

		for (let i = 0; i < 5; i++) {
			points.push(
				<p key={i}>x</p>
			);
		}

		return points;
	}

	const circles = [
		{
			color: 'white'
		},
		{
			color: '#FFA'
		},
		{
			color: '#222'
		},
		{
			color: 'black'
		}
	];

	const [pills, setPills] = useState([
		{
			text: 'Tamaño',
			value: 0.4,
		},
		{
			text: 'Interliniado',
			value: 0.8,
		},
		{
			text: 'Margen',
			value: 0.6,
		},
		{
			text: 'Brillo',
			value: 0.2,
		},
	]);

	const handleSettingsCircle = (i) => {
		console.log(i);
	}

	return (isVisible ? <>

		{/* <Lightbox 
			hidden
			onClick={() => setIsVisible(false)}
		/> */}

		<div className="bg-purple-800 absolute bottom-0 z-10 text-white"
			style={{
				width: '140vw',
				height: '140vw',

				left: '50%',
				transform: 'translateX(-50%)',

				marginBottom: '-42vw',

				borderRadius: '100%',
				borderBottomRightRadius: '0',
				borderBottomLeftRadius: '0',

				boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
			}}
		>
			<div className="w-10/12 mx-auto px-20 mt-16 space-y-6" style={{
				// marginBottom: '0vw',
			}}>
				<div className="flex justify-between items-end">
					<p className="text-lg font-light">Fuente</p>
					<div className="cursor-pointer">
						<p className="text-2xl font-light">Verdana</p> {/* TODO implementar esto */}
						<div className="flex text-xs space-x-1 justify-end">{renderPoints()}</div>
					</div>
				</div>

				<div className="bg-purple-400 h-0.5"
					style={{
						width: 'calc(100% + 16vw)',
						marginLeft: '-8vw',
						marginTop: '1vh', marginBottom: '-1.5vh',
					}}
				/>

				<div className="flex justify-between" style={{ width: 'calc(100% + 10vw)', marginLeft: '-5vw' }}>{circles.map((el, i) => (
					<p key={i} className={`rounded-full w-12 h-12 flex justify-center items-center cursor-pointer
					${i < 2 ? 'text-black' : 'text-white'}
					`}
						onClick={() => handleSettingsCircle(i)}
						style={{
							backgroundColor: el.color
						}}>
						C{i}
					</p>
				))}</div>

				<div className="bg-purple-400 h-0.5"
					style={{
						width: 'calc(100% + 16vw)',
						marginLeft: '-8vw',
						marginTop: '2vh', marginBottom: '-1.5vh',
					}}
				/>

				<div className="flex justify-between">
					{pills.map((el, i) => (<div key={i}
						onClick={() => { 
							el.value >= 1 ? el.value = 0 : el.value += 0.2;
							setPills([...pills]); // TODO not sure why this works, gotta check that out
						}}
						className="flex flex-col items-center space-y-1 cursor-pointer">
						<div className="w-14 h-32 bg-purple-900 rounded-full overflow-hidden flex items-end">
							<div className="w-full bg-yellow-500a from-yellow-400 to-yellow-600 bg-gradient-to-t"
								style={{ height: el.value * 100 + '%' }}
							/>
						</div>
						<p className="text-xs font-light">{el.text}</p>
					</div>))}
				</div>
			</div>
		</div>
	</> : <div></div>);
}
