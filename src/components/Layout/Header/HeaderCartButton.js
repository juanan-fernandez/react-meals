import { useContext } from 'react';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ children, onClickCartButton }) => {
	const cartCtx = useContext(CartContext);

	const totalItems = cartCtx.items.reduce((acc, curr) => {
		return acc + curr.units;
	}, 0);

	return (
		<button className={styles.button} onClick={onClickCartButton}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>{children}</span>
			<span className={styles.badge}>{totalItems}</span>
		</button>
	);
};

export default HeaderCartButton;
