import React, { useContext, useState } from 'react';
import Input from '../Input';
import AppContext from '../../context/AppProvider';

const Budget = () => {
	const { budget, setBudget, validBudget, setValidBudget } = useContext(AppContext);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isNaN(budget) || budget <= 100) {
			setError('Enter a valid quote. Must be higher than $100.');

			setTimeout(() => {
				setError('');
			}, 4500);
			return;
		}
		setBudget(Number(budget));
		setValidBudget(!validBudget);
	};

	const handleChange = (e) => {
		setBudget(Number(e.target.value));
	};

	return (
		<form
			className='lg:w-1/3 md:w-2/3 w-3/4 absolute top-24 mx-auto left-0 right-0 mt-2 h-40 shadow-xl px-10 py-4 bg-gray-100 rounded-lg'
			onSubmit={handleSubmit}
		>
			<div className={`mb-3 ${error && 'mb-2'}`}>
				<label htmlFor='budget' className='mb-1 block text-blue-500 font-semibold text-lg'>
					Enter your Budget
				</label>
				<Input id='budget' type='text' placeholder='Please, enter your Budget ($)' onChange={handleChange} />
				{error && (
					<p className='text-xs uppercase mt-2 bg-red-700 inline-block text-white rounded-sm tracking-wider px-2 py-1 font-semibold'>
						{error}
					</p>
				)}
			</div>
			<Input id='budget' type='submit' value='Add' />
		</form>
	);
};

export default Budget;
