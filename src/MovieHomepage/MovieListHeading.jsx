import React from 'react';

export const MovieListHeading = (props) => {
	return (
		<div className='col list-header'>
			<span>{props.title}</span>
		</div>
	);
};
