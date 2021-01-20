import React from 'react';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    ImageContainer,
    NameContainer,
    PriceContainer,
    AddToCartButtonContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

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