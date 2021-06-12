import { useState } from 'react';
import { consts } from '../../resources/constants.js';
import { icons } from '../../resources/icons.js';

export const ReaderSettings = ({ isVisible, setBackgroundColor, setTextColor, setTextFont }) => {
	/* 
		TODO
		Para implementar el 'slider' se puede hacer un apaño haciendo que el contenido de la pastilla esté compuesto por 'muchos' <div/>, tal que cuando 'cliques' (o drag, touch, etc) en uno, se ilumine este y todos los que están debajo, creando así la sensación de 'slider'
		TODO
	*/

	const renderPoints = (index) => {
		let points = [];

		for (let i = 0; i < 4; i++) {
			points.push(
				<div key={i} className="bg-white w-1.5 h-1.5 rounded-full" />
			);
		}

		points[currentFontIndex] = <div key={'honestly fuck this'} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: consts.colors.primary }} />;


		return points;
	}
	const renderFonts = (i) => {
		switch (i) {
			case 0:
				setTextFont('Verdana');
				return 'Verdana';
			case 1:
				setTextFont('Roboto');
				return 'Roboto';
			case 2:
				setTextFont('Times New Roman');
				return 'Times New Roman';
			case 3:
				setTextFont('Minion Pro');
				return 'Minion Pro';
			default:
		}
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
	]);

	const getIcons = (i) => {
		switch (i) {
			case 0:
				return icons.size;
			case 1:
				return icons.line_height;
			case 2:
				return icons.margin;
			default:
		}
	}

	const [selectedCircle, setSelectedCircle] = useState(0);

	const [currentFontIndex, setCurrentFontIndex] = useState(0);
	const handleFontSwitch = () => {
		if (currentFontIndex < 3) setCurrentFontIndex(currentFontIndex + 1);
		else setCurrentFontIndex(0);

		renderFonts(currentFontIndex);
	}

	const handleCircles = (i) => {
		setSelectedCircle(i);
		switch (i) {
			case 0:
				setBackgroundColor('white');
				setTextColor('black');
				break;
			case 1:
				setBackgroundColor('antiquewhite');
				setTextColor('black');
				break;
			case 2:
				setBackgroundColor('grey');
				setTextColor('white');
				break;
			case 3:
				setTextColor('white');
				setBackgroundColor('black');
				break;
			default:
		}
	}

	return (isVisible ? <>
		<div className="absolute bottom-0 z-10 text-white"
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
				backgroundColor: consts.colors.secondary,
			}}
		>
			<div className="w-10/12 mx-auto px-20 mt-16 space-y-6">
				<div className="flex justify-between items-end">
					<p className="text-lg font-light">Fuente</p>
					<div className="cursor-pointer" onClick={handleFontSwitch}>
						<p className="text-2xl font-light">{renderFonts(currentFontIndex)}</p> {/* TODO implementar esto */}
						<div className="flex text-xs space-x-1.5 justify-end">{renderPoints()}</div>
					</div>
				</div>

				<div className="bg-white"
					style={{
						width: 'calc(100% + 16vw)',
						height: '1px',
						marginLeft: '-8vw',
						marginTop: '1vh', marginBottom: '-1.5vh',
					}}
				/>

				<div className="flex justify-between" style={{ width: 'calc(100% + 10vw)', marginLeft: '-5vw' }}>{circles.map((el, i) => (
					<p key={i} className={`rounded-full w-12 h-12 flex justify-center items-center cursor-pointer
					${i < 2 ? 'text-black' : 'text-white'}
					`}
						onClick={() => handleCircles(i)}
						style={{
							backgroundColor: el.color
						}}>
						{selectedCircle === i && <img className="p-0.5" src={'../' + icons.selected_circle} alt="selected" />}
					</p>
				))}</div>

				<div className="bg-white"
					style={{
						width: 'calc(100% + 16vw)',
						height: '1px',
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
						<div className="w-14 h-32 rounded-full overflow-hidden flex items-end"
							style={{ backgroundColor: consts.colors.secondary_dark }}
						>
							<div className="w-full relative"
								style={{
									height: el.value * 100 + '%',
									backgroundImage: `linear-gradient(0deg, ${consts.colors.primary_light} 0%, ${consts.colors.primary} 100%)`,
								}}
							>
								<div className="w-full flex justify-center mb-2 absolute bottom-0">
									<img className="w-5" alt="" src={'../' + getIcons(i)} />
								</div>
							</div>

						</div>
						<p className="text-xs font-light">{el.text}</p>
					</div>))}
				</div>
			</div>
		</div>
	</> : <div></div>);
}
