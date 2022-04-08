import React, { useState } from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatearFecha, formatearCantidad } from '../helpers';
import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';
import IconoGastos from '../img/icono_gastos.svg';

const diccionarioIconos = {
	ahorro: IconoAhorro,
	casa: IconoCasa,
	comida: IconoComida,
	salud: IconoSalud,
	ocio: IconoOcio,
	suscripciones: IconoSuscripciones,
	gastos: IconoGastos,
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
	const { nombreGasto, cantidadGasto, categoriaGasto, id, fecha } = gasto;

	const leadingActions = () => (
		<LeadingActions>
			<SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
		</LeadingActions>
	);

	const trailingActions = () => (
		<TrailingActions>
			<SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
				Eliminar
			</SwipeAction>
		</TrailingActions>
	);

	return (
		<SwipeableList>
			<SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
				<div className='gasto sombra'>
					<div className='contenido-gasto'>
						<img src={diccionarioIconos[categoriaGasto]} alt='Icono Gasto' />
						<div className='descripcion-gasto'>
							<p className='categoria'>
								{categoriaGasto === 'gastos' ? 'Gastos Varios' : categoriaGasto}
							</p>
							<p className='nombre-gasto'>{nombreGasto}</p>
							<p className='fecha-gasto'>
								Agregado: {''}
								<span> {formatearFecha(fecha)}</span>
							</p>
						</div>
					</div>
					<p className='cantidad-gasto'>{formatearCantidad(cantidadGasto)}</p>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	);
};

export default Gasto;
