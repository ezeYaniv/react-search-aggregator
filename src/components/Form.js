import React from 'react';

const Form = () => {
	return (
		<div>
			<form onSubmit={handleFormSubmit} className="ui form">
				<Searchbar />
				<Checkboxes />
				<button type="submit" className="ui button">
					Search!
				</button>
			</form>
		</div>
	);
};

export default Form;
