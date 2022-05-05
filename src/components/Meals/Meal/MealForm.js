import { useRef, useState } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import styles from './MealForm.module.css';

const MealForm = ({ id, onAddToCart }) => {
	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = ev => {
		ev.preventDefault();
		const inputUnits = unitsInputRef.current.value;
		if (inputUnits.trim().length === 0 || inputUnits < 1 || inputUnits > 5) {
			setAmountIsValid(false);
			return;
		}
		setAmountIsValid(true);
		onAddToCart(+inputUnits);
	};

	const unitsInputRef = useRef();

	return (
		<form className={styles.form}>
			<Input
				ref={unitsInputRef}
				label='Amount'
				input={{
					type: 'number',
					defaultValue: 1,
					id: `amount_${id}`,
					name: 'amount',
					min: 1,
					max: 5,
					step: 1,
					look: 'sm-4',
				}}
			/>
			<Button onButtonClick={submitHandler}>+ Add</Button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealForm;
