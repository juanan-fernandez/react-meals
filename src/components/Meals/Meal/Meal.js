import styles from './Meal.module.css';
import MealForm from './MealForm';

const Meal = ({ id, name, description, price }) => {
	const formattedPrice = `$${price.toFixed(2)}`;
	return (
		<div className={styles.meal}>
			<div>
				<h2>{name}</h2>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>
			<div>
				<MealForm id={id} />
			</div>
		</div>
	);
};

export default Meal;
