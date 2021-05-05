import React, { useEffect, useState } from 'react';
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
	};

	// This automatically searches if no activity happens after 1 second (either typing a term or clicking a checkbox)
	useEffect(() => {
		setResults([]);
		const search = () => {
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
		if (term) {
			const timer = setTimeout(() => search(), 1000);
			return () => clearTimeout(timer);
		}
	}, [term, searchEngines]);

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

// *** NOTE: This code allows you to search upon Form submit - commented out because we are using the automatic search function ***
// *** This should be put into the event handler 'handleFormSubmit' and a Search button should be added to the <Form /> component

// 	setResults([]);
// 	// this code runs the appropriate search function (wikiSearch, youtubeSearch, etc) based on the search engine(s) selected
// 	// then updates the 'results' piece of state
// 	Object.entries(searchEngines).forEach(([engine, isSelected]) => {
// 		if (isSelected && term) {
// 			searchEngineFunctions[engine](term).then((result) => {
// 				setResults((prevResults) => {
// 					return {
// 						...prevResults,
// 						[engine]: result,
// 					};
// 				});
// 			});
// 		}
// 	});
