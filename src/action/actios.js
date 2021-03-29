export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addProductToCard = computer => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: computer
    }
};