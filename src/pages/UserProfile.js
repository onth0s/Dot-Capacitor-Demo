import { consts } from "../resources/constants";
import { icons } from "../resources/icons";

import { SVG } from '../components/common/SVG.js'
import { Link, glide } from "react-tiger-transition";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
// TODO
export const UserProfile = () => {
	const genres = [
		icons.fable,
		icons.fable,
		icons.fable,
	]

	// TODO solo se mostrarán las 3 más recientes
	const valorations = [
		{
			genre: icons.fable,
			title: 'El Gato que está triste y azul',
			author: 'Edgar Allan Poe',
		},
		{
			genre: icons.fable,
			title: 'El Gato Negro',
			author: 'Edgar Allan Poe',
		},
		{
			genre: icons.fable,
			title: 'El Gato Negro',
			author: 'Edgar Allan Poe',
		},
	]

	const renderScore = (score, classes) => {
		let score_ = []; // TODO implement stars filled in funcion of score

		for (let i = 0; i < 5; i++) {
			score_.push(
				<img key={i} className={classes} src={icons.star} alt="star" />
			);
		}

		return score_;
	}

	return (
		<div className="h-full">
			<div className="bg-gradient-to-t from-yellow-500 to-yellow-600 w-full h-72 absolute top-0" style={{ zIndex: -1 }}>

			</div>

			<Link to='/' transition='glide-bottom'>
				<SVG route={icons.arrow_left} alt={'back arrow'}
					size={[consts.corner_btn.size.width]}
					position={'LEFT'}
					left={consts.corner_btn.left}
					top={consts.corner_btn.top}
				/>
			</Link>
			<SVG route={icons.three_dots} alt={'three dots'}
				size={[consts.corner_btn.size.width]}
				position={'RIGHT'}
				right={consts.corner_btn.right}
				top={consts.corner_btn.top}
			/>

			<div className="w-full flex justify-center pt-12 pb-2">
				<img src={'./assets/UserProfile/user-profile-pic.jpg'} alt="user profile" className="rounded-full w-3/12"/>
			</div>

			<p className="w-8/12 text-center mx-auto">Marialala</p>

			<div className="flex justify-center items-center mt-2 w-11/12 mx-auto">
				<p className="w-1/2 text-center">43 Km</p>
				<div className="bg-white rounded-full h-16 w-0.5" />
				<p className="w-1/2 text-center">54</p>
			</div>

			<div className="w-full bg-white absolute bottom-0 rounded-t-2xl"
				style={{ height: '63.5vh', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}
			>
				<div className="p-8">
					<p className="mb-2">TUS GUSTOS</p>
					<div className="flex justify-center space-x-5 mb-6">{genres.map((el, i) => (
						<img key={i} className="w-20 cursor-pointer" src={el} alt="genres" />
					))}</div>
					<p>VALORACIONES</p>
				</div>

				{valorations.map((el, i) => (
					<div key={i} className="bg-gradient-to-t from-gray-200 to-white w-full flex items-center h-16 px-6 space-x-3">
						<img className="w-8" src={el.genre} alt="genre" />
						<div className="h-6 w-56 flex overflow-hidden space-x-3">
							{el.title} — {el.author}
						</div>

						<div className="flex">
							{renderScore(4.5, "w-4")}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
