import axios from 'axios';
import joinURL from 'url-join';

const SERVER_URL = 'https://dot-dot.herokuapp.com/';
// const SERVER_URL = 'http://localhost:8080';

export const getFables = async() => {
	try {
		const res = await axios({
			method: 'GET',
			url: joinURL(SERVER_URL, '/content/fables/Aesop/random'),
		});
		
		// console.log(res.data);
		return res.data;
	} catch(err) {
		console.log('Axios Error retrieving Aesop fables: ');
		console.log(err);
	}
}
