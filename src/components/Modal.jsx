import React, { useState, useEffect } from 'react';
import Mensaje from './Mensaje';

import CerrarBtn from '../img/cerrar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {
	const [mensaje, setMensaje] = useState('');
	const [nombreGasto, setNombreGasto] = useState('');
	const [cantidadGasto, setCantidadGasto] = useState('');
	const [categoriaGasto, setCategoriaGasto] = useState('');
	const [fecha, setFecha] = useState('');
	const [id, setId] = useState('');

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setNombreGasto(gastoEditar.nombreGasto);
			setCantidadGasto(gastoEditar.cantidadGasto);
			setCategoriaGasto(gastoEditar.categoriaGasto);
			setId(gastoEditar.id);
			setFecha(gastoEditar.fecha);
		}
	}, []);

	const ocultarModal = () => {
		setAnimarModal(false);
		setGastoEditar({});
		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombreGasto, cantidadGasto, categoriaGasto].includes('')) {
			setMensaje('Todos los campos son obligatorios');

			setTimeout(() => {
				setMensaje('');
			}, 6000);
			return;
		}

		guardarGasto({ nombreGasto, cantidadGasto, categoriaGasto, id, fecha });
	};

	return (
		<div className='modal'>
			<div className='cerrar-modal'>
				<img src={CerrarBtn} alt='Cerrar' onClick={ocultarModal} />
			</div>

			<form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
				<legend>{gastoEditar.nombreGasto ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

				{mensaje && (
					<Mensaje tipo='error'>
						<FontAwesomeIcon className='faCircleExclamation' icon={faCircleExclamation} size='2x' />
						<br />
						{mensaje}
					</Mensaje>
				)}

				<div className='campo'>
					<label htmlFor='nombre'>Gasto:</label>
					<input
						id='nombre'
						type='text'
						placeholder='Ingresa el nombre del gasto'
						value={nombreGasto}
						onChange={(e) => setNombreGasto(e.target.value)}
					/>
				</div>
				<div className='campo'>
					<label htmlFor='cantidad'>Cantidad:</label>
					<input
						id='cantidad'
						type='number'
						placeholder='Ingresa la cantidad del gasto'
						value={cantidadGasto}
						min='1'
						onChange={(e) => setCantidadGasto(Number(e.target.value))}
					/>
				</div>
				<div className='campo'>
					<label htmlFor='categoria'>Categoria:</label>
					<select id='categoria' value={categoriaGasto} onChange={(e) => setCategoriaGasto(e.target.value)}>
						<option value=''>-- Seleccione --</option>
						<option value='ahorro'>Ahorro</option>
						<option value='comida'>Comida</option>
						<option value='casa'>Casa</option>
						<option value='salud'>Salud</option>
						<option value='ocio'>Ocio</option>
						<option value='suscripciones'>Suscripciones</option>
						<option value='gastos'>Gastos Varios</option>
					</select>
				</div>
				<input type='submit' value={gastoEditar.nombreGasto ? 'Guardar Cambios' : 'Agregar Gasto'} />
			</form>
		</div>
	);
};

export default Modal;
