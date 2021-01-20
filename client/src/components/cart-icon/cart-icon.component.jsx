import React from 'react';

import {
    CartIconContainer,
    ShoppingIconContainer,
    ItemCountContainer
} from './cart-icon-styles';

const CartIcon = ({ cartItemsCount, toggleCartHidden }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer />
            <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
        </CartIconContainer>
    );
}

export default CartIcon;
