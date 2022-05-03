import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import styles from './MealForm.module.css';

const MealForm = ({ id }) => {
	return (
		<form className={styles.form}>
			<Input
				label='Amount'
				input={{
					type: 'number',
					defaultValue: 1,
					id: `amount_${id}`,
					name: 'amount',
					min: 1,
					max: 5,
					step: 1,
				}}
			/>
			<Button>+ Add</Button>
		</form>
	);
};

export default MealForm;
