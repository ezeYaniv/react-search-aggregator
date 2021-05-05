import React from 'react';
import Result from './Result';

const ResultList = ({ results }) => {
	const renderedResultList = Object.keys(results).map((engine) => {
		return (
			<div key={engine} className="ui list celled relaxed engine-container">
				<h2>{engine} Results</h2>
				<Result engine={engine} results={results[engine]} />
			</div>
		);
	});

	return <div className="result-content">{renderedResultList}</div>;
};

export default ResultList;
