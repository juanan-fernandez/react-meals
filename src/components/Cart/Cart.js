import { useContext } from 'react';
import CartItem from './CartIem';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
const Cart = ({ closeCart }) => {
	//const cartItems = [{ id: 1, name: 'happy meal', units: 50, price: 1.99 }];
	const cartCtx = useContext(CartContext);

	const cartItems = cartCtx.items;
	const hasItems = cartItems.length > 0;
	const cart = (
		<ul className={styles['cart-items']}>
			{' '}
			{cartItems.map(item => {
				return (
					<li key={item.id}>
						<CartItem
							item={item}
							onAdd={cartCtx.addItem}
							onRemove={cartCtx.removeItem}
						/>
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
				<span>${cartCtx.totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<Button classes={'btn--alt'} onButtonClick={closeCart}>
					Close
				</Button>
				{hasItems && <Button>Order</Button>}
			</div>
		</Modal>
	);
};

export default Cart;
