import { useState, useEffect } from 'react';
import useHttp from '../../../hooks/use-http';
import styles from './MealsList.module.css';
import Card from '../../UI/Card/Card';
import Meal from '../Meal/Meal';

const MealsList = () => {
	const [mealsList, setMealsList] = useState([]);
	const { isLoading, terror, sendRequest: getMeals } = useHttp();

	useEffect(() => {
		const formatListOfMeals = data => {
			const auxMeal = [];
			for (const key in data) {
				auxMeal.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: +data[key].price,
				});
			}
			setMealsList(auxMeal);
		};

		const reqObj = {
			url: 'https://react-meals-6e546-default-rtdb.firebaseio.com/meals.json/',
		};

		getMeals(reqObj, formatListOfMeals);
	}, [getMeals]);

	const ListOfMeals = mealsList.map(meal => (
		<li key={meal.id}>
			{
				<Meal
					id={meal.id}
					name={meal.name}
					description={meal.description}
					price={meal.price}
				/>
			}
		</li>
	));

	return (
		<Card>
			{isLoading && <p>loading... </p>}
			<ul className={styles.list}>{ListOfMeals}</ul>
			{terror && <p>terror</p>}
		</Card>
	);
};

export default MealsList;
