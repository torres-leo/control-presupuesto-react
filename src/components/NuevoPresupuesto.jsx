import React, { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidBudget }) => {
	const [mensaje, setMensaje] = useState('');

	const handlePresupuesto = (e) => {
		e.preventDefault();

		if (!presupuesto || presupuesto < 0) {
			setMensaje('No es un Presupuesto Válido');

			setTimeout(() => {
				setMensaje('');
			}, 5000);
			return;
		}
		setIsValidBudget(true);
	};
	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form onSubmit={handlePresupuesto} className='formulario'>
				<div className='campo'>
					<label>Definir Presupuesto (C$)</label>
					<input
						className='nuevo-presupuesto'
						type='number'
						placeholder='Ingresa tu Presupuesto'
						value={presupuesto}
						min='100'
						onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>
				</div>
				<input type='submit' value='Agregar Presupuesto' />
				{mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
			</form>
		</div>
	);
};

export default NuevoPresupuesto;
