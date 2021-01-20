import React, { useContext } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';

import DirectoryContext  from '../../contexts/directory/directory.context';

const Directory = () => {
    const sections = useContext(DirectoryContext);
    
    return (
        <DirectoryMenuContainer>
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </DirectoryMenuContainer>
    );
}

export default Directory;