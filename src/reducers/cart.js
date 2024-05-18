export const carInitialState = JSON.parse(localStorage.getItem("cart")) || [];

export const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export const CARD_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
};

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case CARD_ACTION_TYPES.ADD_TO_CART: {
            const productIndex = state.findIndex((item) => item.id === actionPayload.id);
            if (productIndex >= 0) {
                const newState = structuredClone(state);
                newState[productIndex].quantity = newState[productIndex].quantity + 1;
                updateLocalStorage(newState);
                return newState;
                //////////////////////////////////////////////////////////////
                // const newState = state.map((item) => {
                //     if (item.id === actionPayload.id) {
                //         return { ...item, quantity: item.quantity + 1 };
                //     }
                //     return item;
                // });
                // updateLocalStorage(newState);
                // return newState;
                //////////////////////////////////////////////////////////////
                // const newState = [
                //     ...state.slice(0, productIndex),
                //     { ...state[productIndex], quantity: state[productIndex].quantity + 1 },
                //     ...state.slice(productIndex + 1),
                // ];
                // updateLocalStorage(newState);
                // return newState;
            } else {
                updateLocalStorage([...state, { ...actionPayload, quantity: 1 }]);
                return [...state, { ...actionPayload, quantity: 1 }];
            }
        }
        case CARD_ACTION_TYPES.REMOVE_FROM_CART: {
            updateLocalStorage(state.filter((item) => item.id !== actionPayload.id));
            return state.filter((item) => item.id !== actionPayload.id);
        }
        case CARD_ACTION_TYPES.CLEAR_CART: {
            updateLocalStorage([]);
            return [];
        }
    }
}