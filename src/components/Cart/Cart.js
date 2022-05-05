import { useContext } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
const Cart = ({ closeCart }) => {
	//const cartItems = [{ id: 1, name: 'happy meal', units: 50, price: 1.99 }];
	const cartCtx = useContext(CartContext);

	const cartItems = cartCtx.items;
	const cart = (
		<ul className={styles['cart-items']}>
			{' '}
			{cartItems.map(item => {
				return (
					<li key={item.id}>
						{item.name} - {item.price} x {item.units} ={' '}
						{(item.price * item.units).toFixed(2)}
					</li>
				);
			})}
		</ul>
	);

	return (
		<Modal onModalClick={closeCart}>
			{cart}
			<div className={styles.total}>
				<span>Total Amount: </span>
				<span>{cartCtx.totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<Button classes={'btn--alt'} onButtonClick={closeCart}>
					Close
				</Button>
				<Button>Order</Button>
			</div>
		</Modal>
	);
};

export default Cart;
