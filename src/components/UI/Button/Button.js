import styles from './Button.module.css';

const Button = ({ children }) => {
	return (
		<button type='button' className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
