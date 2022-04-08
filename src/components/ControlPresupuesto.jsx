import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatearCantidad } from '../helpers';

const ControlPresupuesto = ({ presupuesto, setPresupuesto, gastos, setGastos, setIsValidBudget }) => {
	const [porcentaje, setPorcentaje] = useState(0);
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);

	useEffect(() => {
		const totalGastado = gastos.reduce((total, gasto) => gasto.cantidadGasto + total, 0);

		const totalDisponible = presupuesto - totalGastado;

		// Calculando el porcentaje gastado
		const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

		setGastado(totalGastado);
		setDisponible(totalDisponible);

		setTimeout(() => {
			setPorcentaje(nuevoPorcentaje);
		}, 800);
	}, [gastos]);

	const handleResetApp = () => {
		const resultado = confirm('¿Deseas reiniciar el presupuesto y gastos?');

		if (resultado) {
			setGastos([]);
			setPresupuesto(0);
			setIsValidBudget(false);
		}
	};

	return (
		<div className='contenedor-presupuesto sombra contenedor dos-columnas'>
			<div>
				<CircularProgressbar
					styles={buildStyles({
						pathColor: porcentaje > 100 ? '#d62626' : '#3b82f6',
						trailColor: '#e1e1e1',
						textColor: porcentaje > 100 ? '#d62626' : '#3b82f6',
					})}
					value={porcentaje}
					text={`${porcentaje}% Gastado`}
				/>
			</div>

			<div className='contenido-presupuesto'>
				<button className='reset-app' type='button' onClick={handleResetApp}>
					Resetear App
				</button>
				<p>
					<span>Presupuesto: </span> {formatearCantidad(presupuesto)}
				</p>
				<p className={`${disponible < 0 ? 'negativo' : ''}`}>
					<span>Disponible: </span> {formatearCantidad(disponible)}
				</p>
				<p>
					<span>Gastado: </span> {formatearCantidad(gastado)}
				</p>
			</div>
		</div>
	);
};

export default ControlPresupuesto;
