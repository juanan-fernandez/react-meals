import Button from '../UI/Button/Button';
import styles from './CartItem.module.css';

const CartItem = ({ item, onAdd, onRemove }) => {
	return (
		<div className={styles['cart-item']}>
			<div>
				<h2>{item.name}</h2>
				<div className={styles['price-item-units']}>
					<span className={styles['price-item']}>{item.price.toFixed(2)}</span>
					<span className={styles['units-item']}>{item.units}</span>
				</div>
			</div>
			<div>
				<Button
					classes={'btn--alt btn--small'}
					onButtonClick={() => onRemove(item.id)}
				>
					-
				</Button>
				<Button
					classes={'btn--alt btn--small'}
					onButtonClick={() => onAdd({ ...item, units: 1 })}
				>
					+
				</Button>
			</div>
		</div>
	);
};

export default CartItem;
