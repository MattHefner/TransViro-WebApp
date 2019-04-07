import React from 'react';
import {MenuContainer, MenuText} from './styled';


const MenuList = props => {
    return(
        props.menuItems.map(item => (
            <MenuContainer>
                <MenuText>
                    {item}
                </MenuText>
            </MenuContainer>
        ))
    );


    }

   

export default MenuList;