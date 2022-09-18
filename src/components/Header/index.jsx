import React, { useContext } from 'react';
import AppContext from '../../context/AppProvider';
import Budget from '../Budget';
import BudgetControl from '../BudgetControl';

const Header = () => {
	const { validBudget } = useContext(AppContext);

	const renderComponent = () => {
		if (!validBudget) return <Budget />;

		return <BudgetControl />;
	};

	return (
		<header className='w-full p-5 text-center bg-blue-500 relative h-48 mb-36'>
			<h1 className='text-3xl lg:w-1/4 md:w-1/3 capitalize tracking-wider font-medium py-2 rounded-md inline-block text-white mb-6'>
				Expense Planner
			</h1>

			{renderComponent()}
		</header>
	);
};

export default Header;
