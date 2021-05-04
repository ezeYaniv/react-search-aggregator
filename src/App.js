import React, {useState} from 'react';
import Search from './Search';
import Searchbar from './components/Searchbar';
import CheckboxList from './components/CheckboxList';

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

    console.log(searchEngines);
    // Event handlers

    const handleCheckboxChange = (e) => {
		const option = e.target.value;
		setSearchEngines((prevEngines) => {
			return {
				...prevEngines,
				[option]: !prevEngines[option],
			};
		});
	};

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    }


    // JSX rendering
	return (
		<div>
			{/* <Search searchOptions={searchOptions} /> */}
            <Searchbar handleTermChange={handleTermChange} term={term} />
            <CheckboxList searchEngines={searchEngines} handleCheckboxChange={handleCheckboxChange} />
		</div>
	);
};

export default App;
