import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className = 'pa2'>
			<input 
			type='search' 
			placeholder='Enter person name' 
			className='pa3 ba b--green bg-lightest-blue'
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;