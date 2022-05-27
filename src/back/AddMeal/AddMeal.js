import useHttp from '../../hooks/use-http';
import { useState } from 'react';
import Card from '../../components/UI/Card/Card';
import styles from './AddMeal.module.css';

const AddMeal = () => {
	let loading = false;
	const initFormData = () => {
		return { name: '', description: '', price: 1 };
	};

	const showAddedMeal = meal => {
		const obj = { id: meal.name, ...formData };
		console.log(obj);
	};

	const { isLoading, terror, sendRequest: saveData } = useHttp();
	const [formData, setFormData] = useState(initFormData());

	const handleChange = ev => {
		let inputValue = ev.target.value;
		if (ev.target.type === 'number') inputValue = +inputValue;
		setFormData(prev => ({ ...prev, [ev.target.name]: inputValue }));
	};

	const handleSubmit = ev => {
		ev.preventDefault();

		if (
			formData.name.trim() === '' ||
			formData.description.trim() === '' ||
			formData.price <= 0
		) {
			return;
		}

		loading = isLoading;
		const configReq = {
			url: 'https://react-meals-6e546-default-rtdb.firebaseio.com/meals.json/',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: formData,
		};

		saveData(configReq, showAddedMeal);
		setFormData(initFormData());
	};

	return (
		<Card>
			{loading && <p>Loading... </p>}
			<form onSubmit={handleSubmit} className={styles['form-container']}>
				<div className={styles['form-control']}>
					<label htmlFor='name'>Meal</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='description'>Description</label>
					<input
						type='text'
						id='description'
						name='description'
						value={formData.description}
						onChange={handleChange}
					/>
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='price'>Price</label>
					<input
						type='number'
						min='1'
						step='0.01'
						id='price'
						name='price'
						value={formData.price}
						onChange={handleChange}
					/>
				</div>
				<button type='submit'>Guardar</button>
			</form>
			{terror && <p>{terror}</p>}
		</Card>
	);
};

export default AddMeal;
