import { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ children, onClickCartButton }) => {
	const cartCtx = useContext(CartContext);
	const [isBumped, setIsBumped] = useState(false);

	const totalItems = cartCtx.items.reduce((acc, curr) => {
		return acc + curr.units;
	}, 0);

	useEffect(() => {
		setIsBumped(true);

		const timer = setTimeout(() => {
			setIsBumped(false);
		}, 300);
		return () => clearTimeout(timer);
	}, [totalItems]);

	const stylesButton = `${styles.button} ${isBumped ? styles.bump : ''}`;

	return (
		<button className={stylesButton} onClick={onClickCartButton}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>{children}</span>
			<span className={styles.badge}>{totalItems}</span>
		</button>
	);
};

export default HeaderCartButton;
