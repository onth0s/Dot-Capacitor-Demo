import { Link, glide } from "react-tiger-transition";

import { useHistory } from 'react-router-dom';

import { SVG } from '../components/common/SVG.js';
import { icons } from '../resources/icons.js';
import { backgrounds } from '../resources/backgrounds.js';

import { consts } from '../resources/constants.js';
import { useState } from "react";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });

export const Library = () => {
	const history = useHistory();

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
		{
			title: 'Título de la obra',
			author: 'Autor',
			icon: icons.romance,
			time_ago: 3,
			time_lenght: 5,
		},
	]

	// const favoritesList = [
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// 	{
	// 		icon: icons.romance,
	// 		image: icons.mountain_placeholder,
	// 		title: 'Título de la obra',
	// 		author: 'Autor',
	// 		score: 0.85
	// 	},
	// ]


	const [tabCurrentIndex, setTabCurrentIndex] = useState(0);

	const handleTabClick = (i) => {
		setTabCurrentIndex(i);
	}

	const renderTabs = (i) => {
		switch (i) {
			case 0:
				return (shelfList.map((el, i) => (
					<div key={i} className="
						flex
						h-20
						pl-8
						w-full
						cursor-pointer
					"
						style={{
							borderBottom: '1px solid grey'
						}}

						onClick={() => history.push('/reader/' + i)}
					>
						<img className="
							w-9 mr-8
						" src={icons.fable} alt="genre" />

						<div className="
							flex flex-col justify-center items-start
							w-8/12 h-20
						">
							<p className="font-semibold">{el.title}</p>
							<p>{el.author}</p>
						</div>

						<div className="
							flex flex-col justify-center space-y-2
						">
							<p>{el.time_ago} h</p>
							<p className="text-xs -ml-4">{el.time_lenght} min</p>
						</div>
					</div>
				)));
			case 1:
				return (<>
					<p className="text-2xl pt-2 pl-2">Catálogo semanal</p>

					<div className="
						grid grid-cols-2 gap-4
						p-4
					">
						{catalogItems.map((el, i) => (
							<div key={i} className="
								w-full h-48 relative
								bg-red-100
								rounded-xl shadow-md
								cursor-pointer
								overflow-hidden
							">
								<img className="
									w-full
									p-12 -mt-6
									bg-gray-400 opacity-60
								" src={icons.mountain_placeholder} alt="mountain placeholder" />

								<div className="
									flex
									w-full h-20
									p-2 space-x-2
									absolute bottom-0
									rounded-xl 
									bg-white
								">
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
				return <p>third tab</p>;
			default:
				break;
		}
	}

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

			<SVG route={icons.arrow_left} alt={'search'}
				size={['13vw']}
				position={'RIGHT'}
				right={'10vw'} bottom={'8vh'}
				zIndex={'10'}
				innerStyle={{ backgroundColor: 'blue', borderRadius: '100%' }}
			/>

			<div className="
				flex
				w-full h-10
				mt-40
			">
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
						>
							{el}

							{i === tabCurrentIndex && <div className="
								w-1/3 h-0.5
								absolute bottom-0
								bg-purple-600 
							"/>}
						</div>
					))}
				</div>

				<div className="
					flex items-center justify-center
					w-2/12 h-10
				">x</div>
			</div>

			<div className="
				 overflow-auto
			"
			>{renderTabs(tabCurrentIndex)}</div>
		</div>
	);
}
