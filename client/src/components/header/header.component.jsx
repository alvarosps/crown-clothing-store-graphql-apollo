import React, { useContext, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles';

import { auth } from '../../firebase/firebase.utils';

import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const { hidden } = useContext(CartContext);

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        <OptionLink
                            as='div'
                            onClick={() => auth.signOut()}
                        >
                            SIGN OUT
                        </OptionLink>
                    :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                !hidden && <CartDropdown />
            }
        
        </HeaderContainer>
    );
}

export default Header;