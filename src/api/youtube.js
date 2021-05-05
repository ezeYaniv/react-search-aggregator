import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const youtubeSearch = async (term) => {
	const { data } = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
		params: { part: 'snippet', key: api_key, q: term, maxResults: '5' },
	});

	const youtubeResults = data.items.map(({ id, snippet }) => ({
		key: id.videoId,
		title: snippet.title,
		content: snippet.description,
		link: `http://youtube.com/watch?v=${id.videoId}`,
	}));

	return youtubeResults;
};

export default youtubeSearch;
