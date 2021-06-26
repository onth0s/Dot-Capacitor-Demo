import { Link, glide } from "react-tiger-transition";

import { LibrarySearch } from '../components/Library/LibrarySearch.js';

import { SVG } from '../components/common/SVG.js';
import { icons } from '../resources/icons.js';
import { backgrounds } from '../resources/backgrounds.js';

import { consts } from '../resources/constants.js';
import { useState } from "react";

import { Menu } from "../components/common/Menu.js";

import { useDispatch, useSelector } from 'react-redux';
import { getShelfItems, setReaderIndex } from '../redux/reducers/content.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
//dsgasdf
export const Library = () => {
	// TODO ↓ redux stuff
	const shelfItems = useSelector(getShelfItems);

	const dispatch = useDispatch();
	// TODO ↑ redux stuff

	const tabList = ['Estantería', 'Catálogo', 'Favoritos'];

	const catalogItems = [
		{
			image: './assets/Library/Catalog/cat.png',
			title: 'El Gato Negro',
			author: 'Edgar Allan Poe',
			tipology: 'Relato',
			genre: icons.suspense
		},
		{
			image: './assets/Library/Catalog/abstract.png',
			title: '1984',
			author: 'George Orwell',
			tipology: 'Novela',
			genre: icons.sci_fi
		},
		{
			image: './assets/Library/Catalog/janne.png',
			title: 'Juana de Arco',
			author: 'Mark Twain',
			tipology: 'Novela',
			genre: icons.historica
		},
		{
			image: './assets/Library/Catalog/b&w.png',
			// title: 'Las Tres Hilanderas',
			title: 'Las Tres Hilan...',
			author: 'Hermanos Grimm',
			tipology: 'Microrelato',
			genre: icons.fantasia
		},
		{
			image: './assets/Library/Catalog/fantasy.png',
			// title: 'Viaje al Centro de la Tierra',
			title: 'Viaje al Centro...',
			author: 'Julio Verne',
			tipology: 'Novela',
			genre: icons.sci_fi
		},
		{
			image: './assets/Library/Catalog/chaplin.png',
			title: 'El Gran Dictador',
			author: 'Charlie Chaplin',
			tipology: 'Guion',
			genre: icons.historica
		},
	]

	const renderScore = (score_, classes) => {
		let score = [];

		for (let i = 1; i <= 5; i++) {
			// TODO  
			score.push(
				<img key={i} className={classes} src={icons.star} alt="star" />
			);
		}
		return score;
	}

	const [tabCurrentIndex, setTabCurrentIndex] = useState(0);

	const handleTabClick = (i) => {
		setTabCurrentIndex(i);
	}

	const renderTabs = (i) => {
		switch (i) {
			case 0:
				return (shelfItems && shelfItems.length ? shelfItems.map((el, i) => (
					<Link to={'/reader/' + i} transition='glide-top' key={i}>
						<div className="flex h-20 pl-8 w-full cursor-pointer"
							style={{ borderBottom: '1px solid grey' }}
							onClick={() => dispatch(setReaderIndex(i))}
						>
							<img className="w-9 mr-8" src={el.icon} alt="genre" />

							<div className="flex flex-col justify-center items-start w-8/12 h-20">
								<p className="font-semibold" style={{ lineHeight: el.title.length > 32 ? '1rem' : 'auto' }}>{el.title}</p>
								<p>{el.author}</p>
							</div>

							<div className="flex flex-col justify-center space-y-2">
								{/* <p>{el.time_ago} h</p> */}
								<p className="opacity-0">{el.time_ago} h</p>
								<p className="text-xs -ml-4">{el.time_lenght} min</p>
							</div>
						</div>
					</Link>
				)) : <div className="bg-gray-100 flex flex-col items-center justify-center text-center -mt-12"
					style={{
						height: '79.12vh',
					}}
				>
					<img src={icons.shelf_empty} alt="empty state" className="w-1/6 mb-4" />
					<div className="w-3/5 space-y-4 font-light">
						<p>Ups!! Parece que todavía no conseguiste ningún texto.</p>
						<p>No olvides pasarte por una parada.</p>
					</div>
				</div>);
			case 1:
				return (<>
					<p className="text-2xl pt-4 pl-2">Catálogo semanal</p>

					<div className="grid grid-cols-2 gap-4 p-4">
						{catalogItems.map((el, i) => (
							<div key={i} className="w-full relative bg-red-600x rounded-xl shadow-md cursor-pointer overflow-hidden" style={{ height: '57vw' }}>
								<img className="w-full -mt-6" src={el.image} alt="mountain placeholder" />

								<div className="flex w-full h-20 p-2 space-x-2 absolute bottom-0   rounded-xl  bg-white">
									<div className="flex flex-col w-9/12">
										<div className="w-full h-6 bg-blue-400x overflow-hidden">
											<p className="font-semibold">{el.title}</p>
										</div>
										<div className="w-full h-6 bg-blue-400x overflow-hidden">
											<p className="text-sm">{el.author}</p>
										</div>
										<p className="text-xs">{el.tipology}</p>
									</div>

									<img className="w-9" src={el.genre} alt="genre" />
								</div>
							</div>
						))}
					</div>
				</>);
			case 2:
				let counterFavs = 0;
				for (let i = 0; i < shelfItems.length; i++) {
					if (shelfItems[i].isBookmarked) counterFavs++;
				}

				if (counterFavs > 0) {
					return (shelfItems.map((el, i) => (el.isBookmarked ? <Link to={'/reader/' + i} transition='glide-top'>
						<div className="flex cursor-pointer" key={i} onClick={() => dispatch(setReaderIndex(i))}>
							<div className={`w-28 h-32 ${el.image ? '' : 'bg-opacity-60'}`} style={{
								backgroundImage: el.image ? 'url(' + el.image + ')' : 'url(' + icons.mountain_placeholder + ')', backgroundSize: el.image ? '128px' : '60%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: el.image ? 'white' : '#ffa75a',
							}} />

							<div className="flex flex-col w-64 justify-between py-4 pl-4">
								<div className="flex flex-col">
									<p className="font-semibold">{el.title}</p>
									<p>{el.author}</p>
								</div>

								<div className="flex">
									{renderScore(el.score, "w-5")}
								</div>
							</div>

							<img className="mr-6 w-14" src={el.genre} alt="genre" />
						</div> </Link> : <></>
					)));
				} else {
					return <div className="bg-gray-100 flex flex-col items-center justify-center text-center -mt-12"
						style={{
							height: '79.12vh',
						}}
					>
						<img src={icons.shelf_empty} alt="empty state" className="w-1/6 mb-4" />
						<div className="w-3/5 space-y-4 font-light">
							<p>Parece que no guardaste nada en favoritos.</p>
							<p>Recuerda guardarlos para tener tus historias favoritas más cerca.</p>
						</div>
					</div>;
				}

			default: break;
		}
	}

	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const filters = [
		'Recién desbloqueado',
		'Tiempo de lectura',
		'Alfabéticamente',
		'Autor',
		'Puntuación',
		'Histórica',
	];

	const [showFilters, setShowFilters] = useState(false);

	return (
		<div className="flex flex-col h-full">
			<SVG route={backgrounds.cloud_library} noClickable
				alt={'library background cloud'}
				size={['100vw', '20vh']}
			/>

			<Link to="/" transition='glide-bottom'>
				<SVG route={icons.arrow_left} alt={'go back arrow'} maxContent
					size={[consts.corner_btn.size.width]} maxSize={['40px']}
					position={'LEFT'}
					top={consts.corner_btn.top}
					left={consts.corner_btn.left}
				>
					<p className="
						ml-2
						text-lg
						text-white
					">Biblioteca</p>
				</SVG>
			</Link>

			{/* <SVG route={icons.search} alt={'search'}
				size={['13vw']}
				position={'RIGHT'}
				right={'10vw'} bottom={'8vh'}
				zIndex={'10'}
				innerStyle={{ backgroundColor: 'blue', borderRadius: '100%' }}
				onClick={() => {
					console.log('NOW!');
					// TODO document.querySelector('#test-01').classList.add('animate__animated');
					setIsSearchVisible(true);
				}}
			/> */}

			<LibrarySearch isVisible={isSearchVisible} setIsVisible={setIsSearchVisible} />

			<div className="flex w-full h-10"
				style={{ marginTop: '22vh' }}
			>
				<div className="
					flex
					w-10/12
					relative
				">
					{tabList.map((el, i) => (
						<div key={i} className="
							flex items-center justify-center
							w-1/3  h-10
							cursor-pointer
						"
							onClick={() => handleTabClick(i)}
						>{el}
							{i === tabCurrentIndex && <div className="
								w-1/3 h-0.5
								absolute bottom-0
								bg-purple-600 
							"/>}
						</div>
					))}
				</div>

				{showFilters && <div className="w-full h-full absolute top-0 z-10"
					onClick={() => setShowFilters(false)}
				/>}

				<div className="
					flex items-center justify-center
					w-2/12 h-10 relative
				">
					{/* <img className="cursor-pointer w-6 p-2 box-content" src={icons.filter} alt="filter"
						onClick={() => setShowFilters(true)}
					/> */}

					<Menu isVisible={showFilters} list={filters} />
				</div>
			</div>

			<div className="overflow-auto h-full"
			>{renderTabs(tabCurrentIndex)}</div>
		</div>
	);
}
