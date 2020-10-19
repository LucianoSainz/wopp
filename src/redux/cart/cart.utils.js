export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItem.id
        );

        if(existingCartItem){
            return  cartItem.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? {...cart, quantity: cartItem.quantity + 1 }
                : cartItem
                );
        }
    return [...cartItems, {...cartItemToAdd, quantity: 1 }];
};