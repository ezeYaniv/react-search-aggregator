import React from 'react';

const Searchbar = ({term, handleTermChange}) => {

    return (
		<div className="field">
			<label>Enter search term</label>
			<input type="text" onChange={handleTermChange} value={term}></input>
		</div>
	);
};

export default Searchbar;
