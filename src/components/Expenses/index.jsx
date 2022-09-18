import React, { useContext } from 'react';
import AppContext from '../../context/AppProvider';
import Expense from './Expense';

const Expenses = () => {
	const { expenses } = useContext(AppContext);

	const renderExpenses = () => {
		if (!expenses.length) return <p>No Expenses Yet</p>;

		return expenses.map((expense) => <Expense key={expense.id} expense={expense} />);
	};

	return (
		<div className='mx-auto lg:w-1/2 md:w-3/4 w-6/7 text-center'>
			<h2 className='text-3xl text-center mb-6 inline-block tracking-wide'>
				<span>Expense List</span>
			</h2>

			{renderExpenses()}
		</div>
	);
};

export default Expenses;
