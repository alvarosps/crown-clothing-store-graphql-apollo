import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    TitleContainer,
    SubTitleContainer
} from './menu-item.styles';

const MenuItem = (props) => {
    const { title, size, imageUrl, history, match, linkUrl } = props;
    
    return (
        <MenuItemContainer
            size={size}
            onClick={() => history.push(`${match.url}${linkUrl}`)} 
        >
            <BackgroundImageContainer
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <ContentContainer className='content'>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubTitleContainer>SHOP NOW</SubTitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    );
};
export default withRouter(MenuItem);