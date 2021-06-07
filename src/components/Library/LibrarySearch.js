import { useState } from 'react';

import {
	TextField,
	Radio,
} from '@material-ui/core';

import { icons } from '../../resources/icons';
import { LibrarySearchFilter } from './LibrarySearchFilter';

export const LibrarySearch = ({ isVisible }) => {
	const [selectedValue, setSelectedValue] = useState('unlocked');

	const handleChange = (val) => {
		setSelectedValue(val);
	};

	return (isVisible && <div className="absolute z-20 bg-white w-full 
	h-screen">
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
				items={['Romance']}
			/>
			<LibrarySearchFilter title={'Género'}
				items={['Romance']}
			/>
			<LibrarySearchFilter title={'Género'}
				items={['Romance']}
			/>
		</div>
	</div>);
}
