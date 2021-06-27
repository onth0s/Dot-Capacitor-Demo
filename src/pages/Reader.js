import { SVG } from '../components/common/SVG.js'
import { icons } from '../resources/icons.js';
import { consts } from '../resources/constants.js';

import { Link, glide } from "react-tiger-transition";
import { useState } from 'react';

import { ReaderSettings } from '../components/Reader/ReaderSettings.js';

import _ from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import {
	getShelfItems,
	getReaderIndex, addFavoriteItem,
} from '../redux/reducers/content.js';

glide({ name: 'glide-top', direction: 'top' });
glide({ name: 'glide-bottom', direction: 'bottom' });
//sads 	
export const Reader = () => {
	const shelfItems = useSelector(getShelfItems);
	const readerIndex = useSelector(getReaderIndex);


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

	const renderText = (fontFamily = 'Verdana',) => {
		return ((shelfItems.length !== 0) ? <div className={`space-y-${(fontSize + 1) * 10 / 2 - 4}`}>
			{shelfItems[readerIndex].text.map((el, i) => (
				<p key={i} style={{
					fontFamily,
					fontSize: 0.7 * fontSize + 0.7 + 'rem',
					lineHeight: (1 + lineHeight) * 100 + '%',
				}}>{el}</p>
			))}
		</div> : <div>
			<p>no texts unlocked, no clue how you got here</p>
		</div>);
	}

	const [showUI, setShowUI] = useState(true);

	const dispatch = useDispatch();

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

		{showUI && <>
			<div onClick={(e) => e.stopPropagation()}>
				<Link to="/library" transition='glide-bottom'>
					<SVG route={'../' + icons.arrow_left}
						size={[consts.corner_btn.size.width]} maxContent
						top={consts.corner_btn.top}
						left={consts.corner_btn.left}
						style={{ backgroundColor: consts.colors.secondary, borderRadius: '100%' }}
						zIndex={10}
					/>
				</Link>
			</div>
			<SVG route={shelfItems[readerIndex].isBookmarked ? '../' + icons.bookmark_on : '../' + icons.bookmark_off}
				size={[consts.corner_btn.size.width]} maxContent
				top={consts.corner_btn.top} zIndex={10}
				right={consts.corner_btn.right}
				style={{ backgroundColor: consts.colors.secondary, borderRadius: '100%' }}
				onClick={(e) => {
					e.stopPropagation();

					shelfItems.forEach((el) => {
						if (_.isEqual(shelfItems[readerIndex], el)) {
							dispatch(addFavoriteItem({
								title: shelfItems[readerIndex].title,
								author: shelfItems[readerIndex].author,

								icon: shelfItems[readerIndex].icon,
								genre: shelfItems[readerIndex].icon,

								image: shelfItems[readerIndex].image,

								score: 0.49,

								index: readerIndex,
								
							}));
						}
					});
				}}
			/>
		</>}

		<div className="flex flex-col h-full overflow-auto relative"
			style={{ backgroundColor }}
			onClick={() => {
				if (showSettings) setShowSettings(false);
				else setShowUI(!showUI);
			}}
		>
			<p className="text-2xl font-normal text-center w-8/12 m-auto mb-0"
				style={{ color: textColor, marginTop: '10vh', borderXXX: '1px solid blue' }}
			>
				{(shelfItems.length !== 0) ? <div>{shelfItems[readerIndex].title}</div> : <div>b</div>}
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
