import React from 'react';
import { formatMoney, formatDate } from '../../utils';
import imageEconomy from '../../img/icono_ahorro.svg';
import imageHome from '../../img/icono_casa.svg';
import imageFood from '../../img/icono_comida.svg';
import imageOtherExpenses from '../../img/icono_gastos.svg';
import imageEntertaiment from '../../img/icono_ocio.svg';
import imageHealth from '../../img/icono_salud.svg';
import imageSubs from '../../img/icono_suscripciones.svg';
import Image from '../Image';

const images = {
	economy: imageEconomy,
	food: imageFood,
	home: imageHome,
	otherExpenses: imageOtherExpenses,
	entertainment: imageEntertaiment,
	Health: imageHealth,
	subscriptions: imageSubs,
};

const Expense = ({ expense }) => {
	const { name, quantity, category, date } = expense;
	return (
		<div className='flex items-center justify-between bg-gray-300 py-8 px-4 shadow-lg rounded-lg mb-6'>
			<Image src={images[category]} className='w-20 mr-6' />
			<div className='flex flex-col items-start w-full gap-2 '>
				<p className='text-xl uppercase text-gray-700 tracking-wider underline underline-offset-4'>{category}</p>
				<p className='text-xl text-gray-900 capitalize'>{name}</p>
				<p className='text-gray-600'>
					Add: {''}
					<span>{formatDate(date)}.</span>
				</p>
			</div>
			<p className='w-1/3 font-semibold text-2xl text-green-700'>{formatMoney(quantity)}</p>
		</div>
	);
};

export default Expense;
