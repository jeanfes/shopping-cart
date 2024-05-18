import { createContext, useReducer } from "react";
import { carInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext();

const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, [...carInitialState]);

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    }

    const removedFromCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    return {
        state,
        addToCart,
        removedFromCart,
        clearCart,
    };
}

export const CartProvider = ({ children }) => {
    const { state, addToCart, removedFromCart, clearCart } = useCartReducer();

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removedFromCart,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}
