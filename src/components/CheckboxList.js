import React from 'react';
import Checkbox from './Checkbox';

const CheckboxList = ( {searchEngines, handleCheckboxChange} ) => {
    const renderedCheckboxes = Object.keys(searchEngines).map((option) => {
		return (
            <Checkbox handleCheckboxChange={handleCheckboxChange} option={option} key={option} isChecked={searchEngines[option]}/>
		);
	});
    return (
        <div className="field">
				<label>Search Engines (check desired)</label>
				{renderedCheckboxes}
			</div>
    )
}
export default CheckboxList;