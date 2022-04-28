import { DUMMY_MEALS } from '../../../data/dummy-meals';

const MealsList = () => {
	const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

	return (
		<section>
			<ul>{mealsList}</ul>
		</section>
	);
};

export default MealsList;
