import React from 'react'
import { MenuOptionsContainer, OptionsMenu, OptionsMenuItem } from './style.js'

const MenuOptions = ({id, firstChosenOption, firstOptionDescription, secondOptionDescription, secondChosenOption, positionMenu, padding}) => {
    
    return (
        <MenuOptionsContainer>
            <OptionsMenu positionMenu={positionMenu}>

                <OptionsMenuItem padding={padding} onClick={() => firstChosenOption(id)}>
                    {firstOptionDescription}
                </OptionsMenuItem>
                <OptionsMenuItem padding={padding} onClick={secondChosenOption}>
                    {secondOptionDescription}
                </OptionsMenuItem>

            </OptionsMenu>
        </MenuOptionsContainer>
    )
}

export default MenuOptions
