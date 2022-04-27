import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>React Meals</h1>
				<HeaderCartButton>Your Cart</HeaderCartButton>
			</header>
			<div className={styles['main-image']}>
				<img alt='Our delicious food' src='./img/meals.jpg'></img>
			</div>
		</>
	);
};

export default Header;
