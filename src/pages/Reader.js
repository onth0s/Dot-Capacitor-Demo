import { SVG } from '../components/common/SVG.js'
import { icons } from '../resources/icons.js';
import { consts } from '../resources/constants.js';

import { Link, glide } from "react-tiger-transition";
import { useState } from 'react';

import { ReaderSettings } from '../components/Reader/ReaderSettings.js';

import { useSelector } from 'react-redux';
import {
	getShelfItems,
	getReaderIndex,
} from '../redux/reducers/content.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
//sads 	
export const Reader = () => {
	const shelfItems = useSelector(getShelfItems);
	const readerIndex = useSelector(getReaderIndex);

	const [isBookmarked, setIsBookmarked] = useState(false);

	const [showSettings, setShowSettings] = useState(false);

	const [backgroundColor, setBackgroundColor] = useState('white');
	const [textColor, setTextColor] = useState('black');
	const [textFont, setTextFont] = useState('Verdana');

	const [fontSize, setFontSize] = useState(0.6);
	const [lineHeight, setLineHeight] = useState(0.6);
	const [textMargin, setTextMargin] = useState(0.6);

	const renderScore = (score_, classes, stopPropagation = false) => {
		let score = [];

		for (let i = 0; i < 5; i++) {
			score.push(
				<img key={i} className={classes} src={'../' + icons.star} alt="star"
					onClick={(e) => stopPropagation && e.stopPropagation()}
				/>
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
			tags.push(<p className="cursor-pointer rounded-full p-2 py-1 text-sm" key={i}
				style={{ backgroundColor: consts.colors.primary_light }}
				onClick={(e) => e.stopPropagation()}
			>{el}</p>)
		});

		return tags;
	}

	const testP = [
		'first paragraph first paragraph first paragraph first paragraph first paragraph first paragraph first paragraph first paragraph first paragraph first paragraph',
		'second paragraph second paragraph second paragraph second paragraph second paragraph second paragraph second paragraph second paragraph second paragraph second paragraph',
		'third paragraph third paragraph third paragraph third paragraph third paragraph third paragraph third paragraph third paragraph third paragraph third paragraph'
	];

	const renderText = (fontFamily = 'Verdana',) => {
		return (<div className={`space-y-${(fontSize + 1) * 10 / 2 - 4}`}>
			{testP.map((el, i) => (
				<p key={i} style={{
					fontFamily,
					fontSize: 0.7 * fontSize + 0.7 + 'rem',
					lineHeight: (1 + lineHeight) * 100 + '%',
				}}>{el}</p>
			))}
		</div>);
		// return (shelfItems ? <>
		// 	{/* {shelfItems[readerIndex].text.map((el, i) => { */}
		// 	{shelfItems[2].text.map((el, i) => (
		// 		<p key={i} style={{
		// 			fontFamily,
		// 			fontSize: 0.7 * fontSize + 0.7 + 'rem',
		// 			lineHeight: (1 + lineHeight) * 100 + '%',
		// 		}}>{el}</p>
		// 	))}
		// 	{/* <p style={{
		// 		fontFamily,
		// 		fontSize: 0.7 * fontSize + 0.7 + 'rem',
		// 		lineHeight: (1 + lineHeight) * 100 + '%',
		// 	}}>
		// 		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit dolorum sequi omnis quaerat hic, vitae vero perspiciatis, veritatis, dicta nostrum maiores? Similique, dolores error. Ipsu vero perspiciatis, veritatis, dicta nostrum maiores? Similique, dolores error. Ipsum illum sint inventore eos.
		// 	</p><br />
		// 	<p style={{
		// 		fontFamily,
		// 		fontSize: 0.7 * fontSize + 0.7 + 'rem',
		// 		lineHeight: (1 + lineHeight) * 100 + '%',
		// 	}}>
		// 		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit dolorum sequi omnis quaerat hic, vitae vero perspiciatis, veritatis, dicta nostrum maiores? Similique, dolores error. Ipsum illum sint inventore eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod nisi omnis. Facere vero ipsa et, praesentium quia culpa mollitia impedit, excepturi officiis nihil expedita vel esse. Eum, eos tempora.g elit. Aspernatur quod nisi omnis. Facere vero ipsa et, praesentium quia culpa mollitia impedit, excepturi officiis nihil expedita vel esse. Eum, eos tempora.
		// 	</p><br />
		// 	<p style={{
		// 		fontFamily,
		// 		fontSize: 0.7 * fontSize + 0.7 + 'rem',
		// 		lineHeight: (1 + lineHeight) * 100 + '%',
		// 	}}>
		// 		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit dolorum sequi omnis quaerat hic, vitae vero perspiciatis, veritatis.
		// 	</p> */}
		// </> : <div>
		// 	<p>something went wrong!</p>
		// </div>);
	}

	const [showUI, setShowUI] = useState(true);

	return (<>
		{showUI && <SVG route={'../' + icons.settings}
			size={['12vw']} maxContent
			bottom={'8vh'}
			right={'10vw'}
			zIndex={10}
			style={{ backgroundColor: consts.colors.secondary, borderRadius: '100%' }}

			onClick={() => setShowSettings(true)}
		/>}

		<ReaderSettings isVisible={showSettings} setIsVisible={setShowSettings}
			setBackgroundColor={setBackgroundColor} setTextColor={setTextColor} setTextFont={setTextFont} setFontSize={setFontSize} setLineHeight={setLineHeight} setTextMargin={setTextMargin}
		/>

		<div className="flex flex-col h-full overflow-auto relative"
			style={{ backgroundColor }}
			onClick={() => {
				if (showSettings) setShowSettings(false);
				else setShowUI(!showUI);
			}}
		>
			{showUI && <>
				<div onClick={(e) => e.stopPropagation()}>
					<Link to="/library" transition='glide-bottom'>
						<SVG route={'../' + icons.arrow_left}
							size={[consts.corner_btn.size.width]} maxContent
							top={consts.corner_btn.top}
							left={consts.corner_btn.left}
							style={{ backgroundColor: consts.colors.secondary, borderRadius: '100%' }}
						/>
					</Link>
				</div>
				<SVG route={isBookmarked ? '../' + icons.bookmark_on : '../' + icons.bookmark_off}
					size={[consts.corner_btn.size.width]} maxContent
					top={consts.corner_btn.top}
					right={consts.corner_btn.right}
					style={{ backgroundColor: consts.colors.secondary, borderRadius: '100%' }}
					onClick={(e) => {
						e.stopPropagation();
						setIsBookmarked(!isBookmarked)
					}}
				/>
			</>}

			<p className="text-2xl font-normal text-center w-8/12 m-auto mt-12 mb-0"
				style={{ color: textColor }}
			>
				Título aquí <br />y aquí si es muy largo
			</p>

			<div className="mt-8 mb-8 w-full text-justify"
				style={{ color: textColor, padding: '0 ' + textMargin * 50 + 'px' }}
			>{renderText(textFont)}</div>

			<div className="flex justify-between items-center px-6 mb-4"
				style={{ color: textColor }}
			>
				<div className="text-sm">
					<p>Libro - año de publicación</p>
					<p>Autor</p>
				</div>

				<div className="flex space-x-2 text-sm items-center"
					style={{ color: textColor }}
				>
					<p>4.2</p>
					<div className="flex">
						{renderScore(4.2, "w-4") /* TODO make this work */}
					</div>
					<p>(569)</p>
				</div>
			</div>

			<div className="flex space-x-2 px-6 mb-8">{renderTags()}</div>

			<div className="px-6 mb-8">
				<p style={{ color: textColor }}>¿Qué te ha parecido?</p>

				<div className="flex justify-center space-x-2">{renderScore(4.5, "w-10 mt-2 cursor-pointer", true)}</div>
			</div>

			<div className="mx-auto p-2 text-white rounded-full mb-12 w-40 text-center cursor-pointer"
				style={{ backgroundColor: consts.colors.secondary }}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>Enviar</div>
		</div>
	</>);
}
