'use client'
// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state for the cart
const initialState = {
  cart: [],
};

// Create the CartContext
const CartContext = createContext();

// Create a reducer function to handle cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item already exists in the cart
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }

    case 'REMOVE_FROM_CART':
      // Remove the item from the cart based on some identifier (e.g., ID)
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'INCREASE_QUANTITY':
      // Increase the quantity of a specific item
      const increasedCart = [...state.cart];
      const itemToIncrease = increasedCart.find(
        (item) => item.id === action.payload.id
      );
      itemToIncrease.quantity += 1;
      return { ...state, cart: increasedCart };

    case 'DECREASE_QUANTITY':
      // Decrease the quantity of a specific item
      const decreasedCart = [...state.cart];
      const itemToDecrease = decreasedCart.find(
        (item) => item.id === action.payload.id
      );

      if (itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        return { ...state, cart: decreasedCart };
      } else {
        // If the quantity is 1 or less, remove the item from the cart
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
    default:
      return state;
  }
}


// Create a CartProvider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Actions to add, remove, increase, and decrease items from the cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to access the cart data
export function useCart() {
  return useContext(CartContext);
}

