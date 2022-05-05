import { useContext } from 'react';
import styles from './Meal.module.css';
import MealForm from './MealForm';
import CartContext from '../../../store/cart-context';

const Meal = ({ id, name, description, price }) => {
	const cartCtx = useContext(CartContext);

	const addToCartHandler = units => {
		const item = { id: id, name: name, price: price, units: units };
		cartCtx.addItem(item);
	};

	const formattedPrice = `$${price.toFixed(2)}`;
	return (
		<div className={styles.meal}>
			<div>
				<h2>{name}</h2>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>
			<div>
				<MealForm id={id} onAddToCart={addToCartHandler} />
			</div>
		</div>
	);
};

export default Meal;
