import React, { useContext, useState } from 'react';
import Header from './components/Header';
import Icono from './img/nuevo-gasto.svg';
import Image from './components/Image';
import AppContext from './context/AppProvider';
import Modal from './components/Modal';

const App = () => {
	const { validBudget, modal, setModal, animated, setAnimated } = useContext(AppContext);

	const handleClick = () => {
		setModal(!modal);
		setTimeout(() => {
			setAnimated(!animated);
		}, 400);
	};

	const renderModal = () => {
		if (modal) return <Modal />;
	};

	return (
		<>
			<Header />
			{validBudget && (
				<Image
					src={Icono}
					alt='Icono expense'
					className='w-16 absolute bottom-10 right-10 hover:cursor-pointer hover:drop-shadow-2xl transition-all rounded-full hover:w-14'
					onClick={handleClick}
				/>
			)}
			{renderModal()}
		</>
	);
};

export default App;
