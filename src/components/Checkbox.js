import React from 'react';

const Checkbox = ( {option, handleCheckboxChange, isChecked}) => {
    return (
		<div>
			<label className="icon">
				<input
					checked={isChecked}
					type="checkbox"
					name={option}
					value={option}
					onChange={handleCheckboxChange}></input>
				{option}
			</label>
		</div>
	);
};
export default Checkbox;
