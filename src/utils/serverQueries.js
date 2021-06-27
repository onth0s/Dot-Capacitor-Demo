import axios from 'axios';
import joinURL from 'url-join';

// const SERVER_URL = 'https://dot-dot.herokuapp.com/';
const SERVER_URL = 'http://localhost:8080';

export const getFables = async () => {
	try {
		const res = await axios({
			method: 'GET',
			url: joinURL(SERVER_URL, '/content/fables/Aesop/random'),
		});

		// console.log(res.data);
		return res.data;
	} catch (err) {
		console.log('Axios Error retrieving Aesop fables: ');
		console.log(err);
	}
}

export const getRandomContent = async (shelfItems) => {
	try {
		const shelfItems_ = shelfItems.map(el => {
			return {
				title: el.title,
				auhor: el.author,
			};
		});

		const res = await axios({
			method: 'POST',
			url: joinURL(SERVER_URL, '/content/random'),
			data: shelfItems_
		});

		// console.log(res.data);
		return res.data;
	} catch (err) {
		console.log('Axios Error getting random content: ');
		console.log(err);
	}
}
