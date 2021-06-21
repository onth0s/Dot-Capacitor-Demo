import { useState } from "react";

import { consts } from "../resources/constants";
import { icons } from "../resources/icons";

import { SVG } from '../components/common/SVG.js'
import { Link, glide } from "react-tiger-transition";

import { Menu } from "../components/common/Menu.js";

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
// TODO
export const UserProfile = () => {
	const genres = [
		icons.tragedia_l,
		icons.suspense_l,
		icons.fabula_l,
	]

	// TODO solo se mostrarán las 3 más recientes
	const valorations = [
		{
			genre: icons.suspense,
			title: 'El Gato Negro — Edgar Allan...',
			author: 'Edgar Allan Poe',
		},
		{
			genre: icons.fantasia,
			title: 'Las Tres Hilanderas',
			author: '...',
		},
		{
			genre: icons.sci_fi,
			title: 'Viaje al Centro de la Tierra',
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

	const [showMenu, setShowMenu] = useState(false);

	return (<>
		{showMenu && <div className="w-full h-full absolute top-0 z-20"
			onClick={() => setShowMenu(false)}
		/>}

		<div className="bg-gradient-to-t from-yellow-500 to-yellow-600 w-full absolute top-0" style={{ zIndex: -1, height: '40vh' }}>

		</div>

		<Link to='/' transition='glide-bottom'>
			<SVG route={icons.arrow_left} alt={'back arrow'}
				size={[consts.corner_btn.size.width]}
				position={'LEFT'}
				left={consts.corner_btn.left}
				top={consts.corner_btn.top}
			/>
		</Link>
		<div className="relative">
			{/* <SVG route={icons.three_dots} alt={'three dots'}
				size={[consts.corner_btn.size.width]}
				position={'RIGHT'}
				right={consts.corner_btn.right}
				top={consts.corner_btn.top}

				onClick={() => setShowMenu(true)}
			/> */}

			<Menu isVisible={showMenu} list={['Cerrar sesión']} position={{ top: '4vh', right: '8vw' }} icon={icons.logout} clickHandlers={[
				() => {
					console.log('cerrando sesion');
				}
			]} />
		</div>

		<div className="w-full flex justify-center pt-12 pb-2">
			<img src={'./assets/UserProfile/user-profile-pic.jpg'} alt="user profile" className="rounded-full w-28 shadow-lg border-4" style={{borderColor: consts.colors.primary_light}} />
		</div>

		<p className="w-8/12 text-center mx-auto">Marialala</p>

		<div className="flex justify-center items-center mt-2 w-11/12 mx-auto">
			<p className="w-1/2 text-center">43.7 Km</p>
			<div className="bg-white rounded-full h-16 w-0.5" />
			<div className="w-1/2 flex justify-center space-x-1">
				<p className="text-center">54</p>
				<img src={icons.bookmark_solo} alt=""  className=" items-center" style={{width: '9px', marginTop: '-1px'}}/>
			</div>
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
	</>);
}
