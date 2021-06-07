import { SVG } from '../components/common/SVG.js'
import { icons } from '../resources/icons.js';
import { consts } from '../resources/constants.js';

import { Link, glide } from "react-tiger-transition";
import { Lightbox } from '../components/common/Lightbox.js';
import { useState } from 'react';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
//s
export const Reader = () => {
	const [isBookmarked, setIsBookmarked] = useState(false);

	const renderScore = (score_, classes) => {
		let score = [];

		for (let i = 0; i < 5; i++) {
			score.push(
				<img key={i} className={classes} src={'../' + icons.star} alt="star" />
			);
		}

		return score;
	}

	const renderTags = () => {
		let tags = [];
		let tags_ = [
			'Microrelato', 'Romance',
		];

		tags_.forEach((el, i) => {
			tags.push(<p className="rounded-full bg-red-200 p-2 py-1 text-sm" key={i}>{el}</p>)
		});

		return tags;
	}

	return (<>
		{/* <Lightbox /> */}

		<div className="flex flex-col h-full overflow-auto relative">

			<Link to="/library" transition='glide-bottom'>
				<SVG route={'../' + icons.arrow_left}
					size={[consts.corner_btn.size.width]} maxContent
					top={consts.corner_btn.top}
					left={consts.corner_btn.left}
					style={{ backgroundColor: 'blue', borderRadius: '100%' }}
				/>
			</Link>
			<SVG route={isBookmarked ? '../' + icons.bookmark_on : '../' + icons.bookmark_off}
				size={[consts.corner_btn.size.width]} maxContent
				top={consts.corner_btn.top}
				right={consts.corner_btn.right}
				style={{ backgroundColor: 'blue', borderRadius: '100%' }}
				onClick={() => setIsBookmarked(!isBookmarked)}
			/>

			<p className="text-2xl font-normal text-center w-8/12 m-auto mt-12">
				Título aquí <br />y aquí si es muy largo
			</p>

			<div className="m-auto mt-8 mb-8 w-10/12
				bg-red-100 text-justify
			">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit dolorum sequi omnis quaerat hic, vitae vero perspiciatis, veritatis, dicta nostrum maiores? Similique, dolores error. Ipsu vero perspiciatis, veritatis, dicta nostrum maiores? Similique, dolores error. Ipsum illum sint inventore eos.
				</p><br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit dolorum sequi omnis quaerat hic, vitae vero perspiciatis, veritatis, dicta nostrum maiores? Similique, dolores error. Ipsum illum sint inventore eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod nisi omnis. Facere vero ipsa et, praesentium quia culpa mollitia impedit, excepturi officiis nihil expedita vel esse. Eum, eos tempora.g elit. Aspernatur quod nisi omnis. Facere vero ipsa et, praesentium quia culpa mollitia impedit, excepturi officiis nihil expedita vel esse. Eum, eos tempora.
				</p><br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit dolorum sequi omnis quaerat hic, vitae vero perspiciatis, veritatis.
				</p>
			</div>

			<div className="flex justify-between items-center px-6 mb-4">
				<div className="text-sm">
					<p>Libro - año de publicación</p>
					<p>Autor</p>
				</div>

				<div className="flex space-x-2 text-sm items-center">
					<p>4.2</p>
					<div className="flex">
						{renderScore(4.2, "w-4") /* TODO make this work */}
					</div>
					<p>(569)</p>
				</div>
			</div>

			<div className="flex space-x-2 px-6 mb-8">{renderTags()}</div>

			<div className="px-6 mb-8">
				<p>¿Qué te ha parecido?</p>

				<div className="flex justify-center space-x-2">{renderScore(4.5, "w-10 mt-2")}</div>
			</div>

			<div className="mx-auto p-2 bg-purple-600 text-white rounded-full mb-12 w-40 text-center cursor-pointer">Enviar</div>
		</div>
	</>);
}
