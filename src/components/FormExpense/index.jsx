import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../context/AppProvider';
import Input from '../Input';
import Select from '../Select';

const FormNewExpense = () => {
	const { animated, addExpense } = useContext(AppContext);

	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [category, setCategory] = useState('');
	const [error, setError] = useState('');

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleQuantity = (e) => {
		setQuantity(Number(e.target.value));
	};

	const handleCategory = (e) => {
		setCategory(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([name, quantity, category].includes('')) {
			setError('All fields are required');
			setTimeout(() => {
				setError('');
			}, 3500);
		} else if (isNaN(quantity) || quantity <= 0) {
			setError('Insert a valid quantity');
			setTimeout(() => {
				setError('');
			}, 3500);
		} else {
			setError('');
			addExpense({ name, quantity, category });
		}
	};

	const renderErrorMessage = () => {
		if (error)
			return (
				<div className='bg-red-500 mb-4 flex items-center justify-center gap-2'>
					<p className='text-white font-semibold text-sm uppercase py-1'>{error}</p>
					<FontAwesomeIcon icon={faCircleExclamation} className='text-white text-lg' />
				</div>
			);
	};

	return (
		<form
			className={`border-2 border-yellow-500 lg:w-1/3 w-4/5 md:w-3/5 mx-auto mt-40 bg-white/40 py-4 lg:px-10 px-2 rounded-lg transition-all ease-in opacity-0 ${
				animated ? 'opacity-100' : 'opacity-0'
			}`}
			onSubmit={handleSubmit}
		>
			<legend className='text-center md:text-2xl text-yellow-400 mx-auto p-2 uppercase tracking-wider underline underline-offset-8 mb-2 text-base'>
				New Expense
			</legend>
			<div className='mb-3'>
				<label htmlFor='name' className='mb-1 block lg:text-xl text-white text-base'>
					Expense Name
				</label>
				<Input
					id='name'
					placeholder='Pizza, Go to cinema, Travel..'
					className='block w-full lg:placeholder:text-base'
					onChange={handleName}
					value={name}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='quantity' className='mb-1 block lg:text-xl text-white text-base'>
					Quantity ($)
				</label>
				<Input
					type='number'
					id='quantity'
					placeholder='40, 10, 300...'
					className='block w-full lg:placeholder:text-base'
					onChange={handleQuantity}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='category' className='mb-1 block lg:text-xl text-white text-base'>
					Category
				</label>
				<Select name='category' id='category' value={category} onChange={handleCategory} />
			</div>
			{renderErrorMessage()}
			<Input type='submit' className='w-1/2 block mx-auto py-1 !rounded-lg' value='Add Spend' />
		</form>
	);
};

export default FormNewExpense;
