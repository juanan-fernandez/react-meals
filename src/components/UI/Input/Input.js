import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(({ label, input }, ref) => {
	return (
		<div className={styles.input}>
			{label && <label htmlFor='input.id'>{label}</label>}
			<input ref={ref} {...input} className={`${styles[input.look]}`} />
		</div>
	);
});

export default Input;
