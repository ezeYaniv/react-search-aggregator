import axios from 'axios';

const KEY = 'AIzaSyB0EYoslIjaCRuHpJsRw1-P2l7TS28dJZQ';
export default axios.create({
	baseURL: 'https://youtube.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: '5',
		key: KEY,
	},
});
