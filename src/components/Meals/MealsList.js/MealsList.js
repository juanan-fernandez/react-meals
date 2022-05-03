import { DUMMY_MEALS } from '../../../data/dummy-meals';
import styles from './MealsList.module.css';
import Card from '../../UI/Card/Card';
import Meal from '../Meal/Meal';

const MealsList = () => {
	const mealsList = DUMMY_MEALS.map(meal => (
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
			<ul className={styles.list}>{mealsList}</ul>
		</Card>
	);
};

export default MealsList;
