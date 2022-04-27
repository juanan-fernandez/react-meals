import styles from './Header.module.css';
const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>React Meals</h1>
				<button>Cart</button>
			</header>
			<div className={styles['main-image']}>
				<img alt='Our delicious food' src='./img/meals.jpg'></img>
			</div>
		</>
	);
};

export default Header;
