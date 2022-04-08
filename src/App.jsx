import { useState, useEffect } from 'react';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import Filtros from './components/Filtros';
import { generarId } from './helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
	const [gastos, setGastos] = useState(
		localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
	);
	const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
	const [isValidBudget, setIsValidBudget] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastoEditar, setGastoEditar] = useState({});
	const [filtro, setFiltro] = useState('');
	const [gastosFiltrados, setGastosFiltrados] = useState([]);

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);
			setTimeout(() => {
				setAnimarModal(true);
			}, 100);
		}
	}, [gastoEditar]);

	useEffect(() => {
		localStorage.setItem('presupuesto', presupuesto ?? 0);
	}, [presupuesto]);

	useEffect(() => {
		localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
	}, [gastos]);

	useEffect(() => {
		const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0);

		if (presupuestoLS > 0) {
			setIsValidBudget(true);
		}
	}, []);

	const handleNuevoGasto = () => {
		setModal(true);
		setGastoEditar({});
		setTimeout(() => {
			setAnimarModal(true);
		}, 100);
	};

	const guardarGasto = (gasto) => {
		if (gasto.id) {
			// Para actualizar
			const gastosActualizados = gastos.map((gastoState) => (gastoState.id === gasto.id ? gasto : gastoState));
			setGastos(gastosActualizados);
			setGastoEditar({});
		} else {
			gasto.id = generarId();
			gasto.fecha = Date.now();

			setGastos([gasto, ...gastos]);
		}

		setAnimarModal(false);
		setFiltro('');
		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	const eliminarGasto = (id) => {
		const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
		setGastos(gastosActualizados);
	};

	useEffect(() => {
		if (filtro) {
			// Filtrar Gastos x Categoria
			const gastosFiltrados = gastos.filter((gasto) => gasto.categoriaGasto === filtro);

			setGastosFiltrados(gastosFiltrados);
		}
	}, [filtro]);

	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				gastos={gastos}
				setGastos={setGastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidBudget={isValidBudget}
				setIsValidBudget={setIsValidBudget}
			/>

			{isValidBudget && (
				<>
					<main>
						<Filtros filtro={filtro} setFiltro={setFiltro} />
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
							eliminarGasto={eliminarGasto}
							filtro={filtro}
							gastosFiltrados={gastosFiltrados}
						/>
					</main>
					<div className='nuevo-gasto'>
						<img src={IconoNuevoGasto} alt='Icono nuevo gasto' onClick={handleNuevoGasto} />
					</div>
				</>
			)}

			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
					guardarGasto={guardarGasto}
					gastoEditar={gastoEditar}
					setGastoEditar={setGastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
