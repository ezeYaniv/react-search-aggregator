import axios from 'axios';

const redditSearch = async (term) => {
	const response = await axios.get('https://www.reddit.com/search.json?', {
		params: { q: term, limit: 5 },
	});

	const redditResults = response.data.data.children.map(
		({ data: { id, title, selftext, permalink } }) => ({
			key: id,
			title: title,
			content: selftext,
			link: `https://www.reddit.com${permalink}`,
		})
	);
	return redditResults;
};

export default redditSearch;
