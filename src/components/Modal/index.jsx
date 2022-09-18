import React, { useContext } from 'react';
import AppContext from '../../context/AppProvider';
import Cerrar from '../../img/cerrar.svg';
import FormNewExpense from '../FormExpense';
import Image from '../Image';

const Modal = () => {
	const { modal, setModal, animated, setAnimated } = useContext(AppContext);

	const handleClose = () => {
		setTimeout(() => {
			setAnimated(!animated);
		}, 200);
		setTimeout(() => {
			setModal(!modal);
		}, 500);
	};

	return (
		<div className='absolute z-20 bg-black/90 min-h-screen min-w-full top-0'>
			<div>
				<Image
					src={Cerrar}
					alt='close'
					onClick={handleClose}
					className='md:w-12 w-10 absolute md:right-14 right-4 top-10 hover:cursor-pointer bg-red-500 rounded-full p-1 hover:w-11 transition-all'
				/>
			</div>
			<FormNewExpense />
		</div>
	);
};

export default Modal;
