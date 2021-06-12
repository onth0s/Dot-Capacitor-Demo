import { Link, glide } from "react-tiger-transition";

import { LibrarySearch } from '../components/Library/LibrarySearch.js';

import { SVG } from '../components/common/SVG.js';
import { icons } from '../resources/icons.js';
import { backgrounds } from '../resources/backgrounds.js';

import { consts } from '../resources/constants.js';
import { useState } from "react";

import { Menu } from "../components/common/Menu.js";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
//dsgasdf
export const Library = () => {
	const tabList = ['Estantería', 'Catálogo', 'Favoritos']

	const catalogItems = [
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
		{
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Nombre Author',
			tipology: 'Tipología',
			genre: icons.fable
		},
	]

	const shelfList = [
		{
			title: 'Título de la obraaa',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obraxxx',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
	]

	const favoritesList = [
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
		},
		{
			icon: icons.romance,
			image: icons.mountain_placeholder,
			title: 'Título de la obra',
			author: 'Autor',
			score: 0.85
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
				return (shelfList.map((el, i) => (
					<Link to={'/reader/' + i} transition='glide-top' key={i}>
						<div className="flex h-20 pl-8 w-full cursor-pointer"
							style={{ borderBottom: '1px solid grey' }}
						>
							<img className="w-9 mr-8" src={icons.fable} alt="genre" />

							<div className="flex flex-col justify-center items-start w-8/12 h-20">
								<p className="font-semibold">{el.title}</p>
								<p>{el.author}</p>
							</div>

							<div className="flex flex-col justify-center space-y-2">
								<p>{el.time_ago} h</p>
								<p className="text-xs -ml-4">{el.time_lenght} min</p>
							</div>
						</div>
					</Link>
				)));
			case 1:
				return (<>
					<p className="text-2xl pt-2 pl-2">Catálogo semanal</p>

					<div className="
						grid grid-cols-2 gap-4
						p-4
					">
						{catalogItems.map((el, i) => (
							<div key={i} className="w-full h-48 relative bg-red-100 rounded-xl shadow-md cursor-pointer overflow-hidden">
								<img className="w-full p-12 -mt-6 bg-gray-400 opacity-60
								" src={icons.mountain_placeholder} alt="mountain placeholder" />

								<div className="flex w-full h-20 p-2 space-x-2 absolute bottom-0   rounded-xl  bg-white">
									<div className="flex flex-col">
										<p className="font-semibold">{el.title}</p>
										<p className="text-sm">{el.author}</p>
										<p className="text-xs">{el.tipology}</p>
									</div>

									<img className="
										w-9
									" src={icons.fable} alt="genre" />
								</div>
							</div>
						))}
					</div>
				</>);
			case 2:
				return (favoritesList.map((el, i) => (
					<div className="flex cursor-pointer" key={i}>
						<img className="w-28 h-32 bg-gray-400 bg-opacity-60 p-4" src={icons.mountain_placeholder} alt="content related"
						/>

						<div className="flex flex-col flex-grow justify-between py-4 pl-4">
							<div className="flex flex-col">
								<p className="font-semibold">{el.title}</p>
								<p>{el.author}</p>
							</div>

							<div className="flex">
								{renderScore(el.score, "w-5")}
							</div>
						</div>

						<img className="mr-6" src={icons.fable} alt="genre" />
					</div>
				)));
			default:
				break;
		}
	}

	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const filters = [
		'Recién desbloqueado',
		'Tiempo de lectura',
		'Alfabéticamente',
		'Autor',
		'Puntuación',
		'Histórica?',
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

			<SVG route={icons.search} alt={'search'}
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
			/>

			<LibrarySearch isVisible={isSearchVisible} setIsVisible={setIsSearchVisible} />

			<div className="flex w-full h-10"
				style={{marginTop: '22vh'}}
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
					<img className="cursor-pointer w-6 p-2 box-content" src={icons.filter} alt="filter"
						onClick={() => setShowFilters(true)}
					/>

					<Menu isVisible={showFilters} list={filters} />
				</div>
			</div>

			<div className="
				 overflow-auto
			"
			>{renderTabs(tabCurrentIndex)}</div>
		</div>
	);
}
