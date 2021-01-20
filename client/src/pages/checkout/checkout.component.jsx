import React from 'react';
import { default as CheckoutItem } from '../../components/checkout-item/checkout-item.container';
import {
    CheckoutHeader,
    CheckoutPageContainer,
    HeaderBlock,
    TestWarningContainer,
    TotalContainer
} from './checkout.styles';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartTotal }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <TotalContainer>
                <span>Total: ${cartTotal}</span>
            </TotalContainer>
            <TestWarningContainer>
                *Please use the following test cradit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={cartTotal} />
        </CheckoutPageContainer>
    );
}

export default CheckoutPage;
