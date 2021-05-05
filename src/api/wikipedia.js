import axios from 'axios';

const wikiSearch = async (term) => {
	const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
		params: {
			action: 'query',
			format: 'json',
			list: 'search',
			origin: '*',
			srsearch: term,
			srlimit: '5',
		},
	});

	const wikiResults = data.query.search.map(({ pageid, title, snippet }) => ({
		key: pageid,
		title: title,
		content: snippet,
		link: `https://en.wikipedia.org?curid=${pageid}`,
	}));

	return wikiResults;
};

export default wikiSearch;
