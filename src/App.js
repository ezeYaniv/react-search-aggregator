import React, { useState } from 'react';
import Form from './components/Form';

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

	// JSX rendering
	return (
		<React.Fragment>
			<Form
				term={term}
				searchEngines={searchEngines}
				handleTermChange={handleTermChange}
				handleCheckboxChange={handleCheckboxChange}
				handleFormSubmit={handleFormSubmit}
			/>
		</React.Fragment>
	);
};

export default App;
