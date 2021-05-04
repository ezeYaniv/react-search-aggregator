import React, { useState } from 'react';

const Search = ({ searchOptions }) => {
	const [searchEngines, setSearchEngines] = useState(
		searchOptions.reduce((searchOptions, option) => {
			return {
				...searchOptions,
				[option]: false,
			};
		}, {})
	);
    const [term, setTerm] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
        console.log(term);
	};

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    }

	const handleCheckboxChange = (e) => {
		const option = e.target.value;
		setSearchEngines((prevEngines) => {
			return {
				...prevEngines,
				[option]: !prevEngines[option],
			};
		});
	};

	const renderedOptions = searchOptions.map((option) => {
		return (
			<div key={option}>
				<label className="icon">
					<input
						checked={searchEngines[option]}
						type="checkbox"
						name={option}
						value={option}
						onChange={handleCheckboxChange}></input>
					{option}
				</label>
			</div>
		);
	});

	return (
		<form onSubmit={handleFormSubmit} className="ui form">
			<div className="field">
				<label>Enter search term</label>
				<input type="text" onChange={handleTermChange} value={term}></input>
			</div>
			<div className="field">
				<label>Search Engines (check desired)</label>
				{renderedOptions}
			</div>
			<button type="submit" className="ui button">
				Search!
			</button>
		</form>
	);
};

export default Search;
