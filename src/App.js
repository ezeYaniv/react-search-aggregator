import React, { useState } from 'react';
import youtube from './api/youtube';
import Form from './components/Form';
import ResultList from './components/ResultList';
import axios from 'axios';

const App = () => {
	// Variable declarations
	const searchEnginesArray = ['Google', 'Wikipedia', 'YouTube'];

	// State declarations
	const [term, setTerm] = useState('');
	const [searchEngines, setSearchEngines] = useState(
		searchEnginesArray.reduce((searchEnginesArray, option) => {
			return {
				...searchEnginesArray,
				[option]: false,
			};
		}, {})
	);
	const [results, setResults] = useState([]);

	// Event handlers
	const handleTermChange = (e) => setTerm(e.target.value);

	const handleCheckboxChange = (e) => {
		const option = e.target.value;
		setSearchEngines((prevEngines) => {
			return {
				...prevEngines,
				[option]: !prevEngines[option],
			};
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// youtube api
		if (searchEngines['YouTube'] && term) {
			const youtubeSearch = async () => {
				const response = await youtube.get('search', {
					params: { q: term },
				});

				const youtubeResults = response.data.items.map((item) => item.snippet);
				youtubeResults.forEach((item) => console.log(item.title));
				// const [title, description] = youtubeResults;
				// const resultDefault = {engine: 'YouTube', title: title}
				console.log(youtubeResults);
				// console.log(resultDefault);
			};
			youtubeSearch();
		}

		//wikipedia api
		if (searchEngines['Wikipedia'] && term) {
			const wikiSearch = async () => {
				const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
					params: {
						action: 'query',
						format: 'json',
						list: 'search',
						origin: '*',
						srsearch: term,
					},
				});

				// if (data.query) {
					console.log(data.query.search);
				// }
			};
			wikiSearch();
		}
	};

	// JSX rendering
	return (
		<div>
			<Form
				term={term}
				searchEngines={searchEngines}
				handleTermChange={handleTermChange}
				handleCheckboxChange={handleCheckboxChange}
				handleFormSubmit={handleFormSubmit}
			/>
			<hr></hr>
			<ResultList results={results} />
		</div>
	);
};

export default App;
