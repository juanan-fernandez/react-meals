import React, { useReducer } from 'react';

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: item => {},
	removeItem: id => {},
});
export default CartContext;

/////****** REDUCER*/
const defaultCart = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = state.items.concat(action.item);
		const updatedAmount =
			state.totalAmount + +(action.item.price * action.item.units).toFixed(2);
		console.log(updatedItems);
		return { items: updatedItems, totalAmount: updatedAmount };
	}

	if (action.type === 'REMOVE_ITEM') {
		const updatedItems = state.items.concat(action.item);
		const updatedAmount = state.totalAmount + +(action.item.price * action.item.units);
		return { items: updatedItems, totalAmount: updatedAmount };
	}

	return defaultCart;
};

export const CartContextProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, defaultCart);

	const addItemHandler = item => {
		cartDispatch({ type: 'ADD_ITEM', item: item });
	};

	const removeItemHandler = id => {
		cartDispatch({ type: 'REMOVE_ITEM', id: id });
	};

	console.log(cartState);

	const cartData = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};

	return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
};
