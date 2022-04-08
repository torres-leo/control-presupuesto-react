import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({ presupuesto, setPresupuesto, isValidBudget, setIsValidBudget, gastos, setGastos }) => {
	return (
		<header>
			<h1>Planificador de Gastos </h1>

			{isValidBudget ? (
				<ControlPresupuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					gastos={gastos}
					setGastos={setGastos}
					setIsValidBudget={setIsValidBudget}
				/>
			) : (
				<NuevoPresupuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValidBudget={setIsValidBudget}
				/>
			)}
		</header>
	);
};

export default Header;
