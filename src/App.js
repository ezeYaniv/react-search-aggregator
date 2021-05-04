import React from 'react';
import Search from './Search';

const App = () => {
	const searchOptions = ['Google', 'Wikipedia', 'YouTube'];
	return (
		<div>
			<Search searchOptions={searchOptions} />
		</div>
	);
};

export default App;
