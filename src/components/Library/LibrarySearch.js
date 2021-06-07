import { useState } from 'react';

import {
	TextField,
	Radio,
} from '@material-ui/core';

import { icons } from '../../resources/icons';
import { LibrarySearchFilter } from './LibrarySearchFilter';

export const LibrarySearch = ({ isVisible, setIsVisible }) => {
	const [selectedValue, setSelectedValue] = useState('unlocked');

	const handleChange = (val) => {
		setSelectedValue(val);
	};

	return (isVisible && <div id="test-01" className={`absolute z-20 bg-white w-full h-screen 
		${isVisible ? 'animate__animated animate__bounce' : ''}
	`}>
		<div id="library-search-input" className="px-6 flex justify-center mt-6 relative">
			<TextField id="standard-basic" label="Buscar" fullWidth autoComplete="off" color="secondary" />

			<img className="w-8 h-8 p-2 absolute right-0 mr-6 bottom-0 cursor-pointer" src={icons.search_input} alt="search" />
		</div>

		<div className="flex justify-between mt-4 pr-2 w-8/12 mx-auto">
			<div className="flex items-center text-sm" onClick={() => handleChange('unlocked')}>
				<Radio
					checked={selectedValue === 'unlocked'} color="secondary"
				/><p>Desbloqueados</p>
			</div>

			<div className="flex items-center text-sm" onClick={() => handleChange('all')}>
				<Radio
					checked={selectedValue === 'all'} color="secondary"
				/><p>Todos</p>
			</div>
		</div>

		<div className="space-y-4 px-6 mt-4">
			<LibrarySearchFilter title={'Género'}
				items={[
					'Romance', 'Drama', 'Fantasía',
					'Sci-Fi', 'Comedia', 'Suspense',
					'Histórica', 'Fábula', 'Actualidad',
				]}
			/>
			<LibrarySearchFilter title={'Tipología'}
				items={[
					'Microrelato', 'Poema', 'Cómic',
					'Novela', 'Guion',
				]}
			/>
			<LibrarySearchFilter title={'Tiempo'}
				items={[
					'2', '5', '10',
					'15', '20',
				]}
			> min</LibrarySearchFilter>
		</div>

		<div className="bg-red-200 flex absolute bottom-0 w-full">
			<div className="uppercase bg-blue-300 w-1/2 text-center py-6 cursor-pointer text-lg">Restablecer</div>
			<div className="uppercase bg-blue-600 w-1/2 text-center py-6 cursor-pointer text-lg text-white"
				onClick={() => setIsVisible(false)}
			>Ok</div>
		</div>
	</div>);
}
