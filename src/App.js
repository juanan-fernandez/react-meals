import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './store/cart-context';

function App() {
	const [showCart, setShowCart] = useState(false);

	const viewCart = () => {
		setShowCart(true);
	};
	const hideCart = () => {
		setShowCart(false);
	};

	return (
		<CartContextProvider>
			{showCart && <Cart closeCart={hideCart} />}
			<Header onClickCartButton={viewCart} />
			<Meals />
		</CartContextProvider>
	);
}

export default App;
