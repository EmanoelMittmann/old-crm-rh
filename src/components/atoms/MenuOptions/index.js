import React from 'react'
import { MenuOptionsContainer, OptionsMenu, OptionsMenuItem } from './style.js'

const MenuOptions = ({id, firstChosenOption, secondChosenOption}) => {
    
    return (
        <MenuOptionsContainer>
            <OptionsMenu>

                <OptionsMenuItem onClick={() => firstChosenOption(id)}>
                    Editar Projeto
                </OptionsMenuItem>
                <OptionsMenuItem onClick={secondChosenOption}>
                    Editar Status
                </OptionsMenuItem>

            </OptionsMenu>
        </MenuOptionsContainer>
    )
}

export default MenuOptions
