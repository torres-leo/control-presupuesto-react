import React from 'react';

const Input = ({ id, onChange, type, value, placeholder, className }) => {
	const renderInput = () => {
		switch (type) {
			case 'submit':
				return (
					<input
						type='submit'
						value={value}
						className={`bg-blue-500 uppercase w-full text-white font-semibold tracking-wide rounded-sm hover:cursor-pointer hover:bg-blue-600 transition-colors ${className}`}
					/>
				);
			case 'number':
				return (
					<input
						type='number'
						className={`w-full bg-gray-200 rounded-md px-3 md:py-1 text-center text-lg placeholder:text-gray-500/60 ${className}`}
						onChange={onChange}
						value={value}
						placeholder={placeholder}
					/>
				);

			default:
				return (
					<input
						id={id}
						onChange={onChange}
						type='text'
						className={`w-full bg-gray-200 rounded-md px-3 md:py-1 text-center text-lg placeholder:text-gray-500/60 ${className}`}
						value={value}
						placeholder={placeholder}
					/>
				);
		}
	};

	return renderInput();
};

export default Input;
