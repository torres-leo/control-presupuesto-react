import React from 'react';

const Select = ({ name, id, value, onChange }) => {
	return (
		<select
			name={name}
			id={id}
			className='bg-gray-200 text-gray-700 md:text-base rounded-lg block w-full text-center py-1 md:py-2 '
			value={value}
			onChange={onChange}
		>
			<option value=''>-- Select a category --</option>
			<option value='economy'>Economy</option>
			<option value='food'>Food</option>
			<option value='home'>Home</option>
			<option value='other-expenses'>Other expenses</option>
			<option value='entertainment'>Entertainment</option>
			<option value='Health'>Health</option>
			<option value='subscriptions'>Subscriptions</option>
		</select>
	);
};

export default Select;
