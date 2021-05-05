import React from 'react';

const Result = ({ engine, results }) => {
	const renderedResults = results.map(({ key, title, content, link }) => {
		return (
			<div key={key} className="item">
				<div className="right floated content">
					<a
						className="ui button"
						href={link}
						target="#">
						Go
					</a>
				</div>
                <div className="content middle aligned">
                <h3>{title}</h3>
				{engine==="Wikipedia" ? <span dangerouslySetInnerHTML={{ __html: content }}></span> : <p>{content}</p>}
                </div>
			</div>
		);
	});
	return results.length ? renderedResults : <h3>No {engine} results found.</h3>;
};

export default Result;
