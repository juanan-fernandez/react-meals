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
		const itemId = action.item.id;
		const searchedItem = state.items.find(element => element.id === itemId);
		let updatedItems = [];
		if (searchedItem) {
			updatedItems = state.items.map(element => {
				if (element.id === itemId) {
					return {
						...element,
						units: action.item.units + +element.units,
					};
				}
				return element;
			});
		}

		if (!searchedItem) updatedItems = state.items.concat(action.item);
		const updatedAmount =
			state.totalAmount + +(action.item.price * action.item.units).toFixed(2);
		return { items: updatedItems, totalAmount: updatedAmount };
	}

	if (action.type === 'REMOVE_ITEM') {
		//si el id existe debo quitar una unidad.. y si se queda en 0 eliminar todo el carro
		const existingItemId = state.items.findIndex(element => element.id === action.id);
		const existingItem = state.items[existingItemId];
		const updatedAmount = (state.totalAmount - existingItem.price).toFixed(2);
		const updatedItem = { ...existingItem, units: existingItem.units - 1 };
		let updatedItems = [];
		if (updatedItem.units > 0) {
			updatedItems = [...state.items];
			updatedItems[existingItemId] = updatedItem;
		} else {
			updatedItems = state.items.filter(element => element.id !== action.id);
		}

		// const updatedAmount = updatedItems
		// 	.reduce((acc, curr) => {
		// 		return (acc += +(curr.units * curr.price));
		// 	}, 0)
		// 	.toFixed(2);

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

	const cartData = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};

	return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
};
