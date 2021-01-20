import React, { useContext } from 'react';

import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles';

import { CartContext } from '../../providers/cart/cart.provider'

const CartDropdown = ({ history }) => {
    const { cartItems, toggleHidden } = useContext(CartContext);

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
                toggleHidden();
        }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
}

export default withRouter(CartDropdown);
