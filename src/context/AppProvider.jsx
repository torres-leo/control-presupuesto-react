import { createContext, useState, useEffect } from 'react';
import { idGenerator } from '../utils';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [budget, setBudget] = useState(0);
	const [validBudget, setValidBudget] = useState(false);
	const [modal, setModal] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [expenses, setExpenses] = useState([]);

	const addExpense = (expense) => {
		expense.id = idGenerator();
		expense.date = Date.now();
		setExpenses((prevState) => [...prevState, expense]);
		setTimeout(() => {
			setAnimated(!animated);
		}, 200);
		setTimeout(() => {
			setModal(!modal);
		}, 500);
	};

	return (
		<AppContext.Provider
			value={{
				budget,
				setBudget,
				validBudget,
				setValidBudget,
				modal,
				setModal,
				animated,
				setAnimated,
				addExpense,
				expenses,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider };
export default AppContext;
