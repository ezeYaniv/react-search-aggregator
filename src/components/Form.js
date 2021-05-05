import React from 'react';
import Searchbar from './Searchbar';
import CheckboxList from './CheckboxList';

const Form = ({
	term,
	searchEngines,
	handleTermChange,
	handleCheckboxChange,
	handleFormSubmit,
}) => {
	return (
		<form onSubmit={handleFormSubmit} className="ui form">
			<Searchbar term={term} handleTermChange={handleTermChange} />
			<CheckboxList
				searchEngines={searchEngines}
				handleCheckboxChange={handleCheckboxChange}
			/>
			{/* <button type="submit" className="ui button">
				Search!
			</button> */}
		</form>
	);
};

export default Form;
