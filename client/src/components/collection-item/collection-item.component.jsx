import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    ImageContainer,
    NameContainer,
    PriceContainer,
    AddToCartButtonContainer
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const { addItem } = useContext(CartContext);

    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>
                    {name}
                </NameContainer>
                <PriceContainer>
                    ${price}
                </PriceContainer>
            </CollectionFooterContainer>
            <AddToCartButtonContainer
                onClick={() => addItem(item)}    
                inverted
            >
                Add to cart
            </AddToCartButtonContainer>
        </CollectionItemContainer>
    );
}

export default CollectionItem;