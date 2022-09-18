import React, { useContext } from 'react';
import AppContext from '../../context/AppProvider';
import { formatMoney } from '../../utils';

const BudgetControl = () => {
	const { budget } = useContext(AppContext);
	return (
		<div className='lg:w-1/2 md:w-3/4 w-6/7 border-2 mx-auto flex flex-col md:flex-row items-start gap-6 rounded-md p-4 shadow-xl h-48 bg-gray-300 border-solid border-pink-500'>
			<div className='w-full border'>Graph</div>
			<div className='w-2/3 flex flex-col gap-4 items-start'>
				<p className='text-blue-500 font-semibold'>
					Budget: <span className='text-gray-600'>{formatMoney(budget)}</span>
				</p>
				<p className='text-blue-500 font-semibold'>
					Available: <span className='text-gray-600'>{formatMoney(0)}</span>
				</p>
				<p className='text-blue-500 font-semibold'>
					Spent: <span className='text-gray-600'>{formatMoney(0)}</span>
				</p>
			</div>
		</div>
	);
};

export default BudgetControl;
