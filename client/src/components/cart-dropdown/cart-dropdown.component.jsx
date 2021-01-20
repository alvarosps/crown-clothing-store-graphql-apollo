import React from 'react';

import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                history.push('/checkout');
                toggleCartHidden();
        }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
}

export default withRouter(CartDropdown);
