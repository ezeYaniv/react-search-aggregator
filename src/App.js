import React, { useState } from 'react';
import Form from './components/Form';
import ResultList from './components/ResultList';

import youtubeSearch from './api/youtube';
import wikiSearch from './api/wikipedia';
import redditSearch from './api/reddit';

require('dotenv').config();

const App = () => {
	// Variable declarations
	const searchEnginesArray = ['Reddit', 'Wikipedia', 'YouTube'];
	const searchEngineFunctions = {
		Reddit: redditSearch,
		Wikipedia: wikiSearch,
		YouTube: youtubeSearch,
	};

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
		setResults([]);

		// this code runs the appropriate search function (wikiSearch, youtubeSearch, etc) based on the search engine(s) selected
		// then updates the 'results' piece of state
		Object.entries(searchEngines).forEach(([engine, isSelected]) => {
			if (isSelected && term) {
				searchEngineFunctions[engine](term).then((result) => {
					setResults((prevResults) => {
						return {
							...prevResults,
							[engine]: result,
						};
					});
				});
			}
		});
	};

	// JSX rendering
	return (
		<div className="content-container">
			<h1>Search Engine Aggregator</h1>

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
