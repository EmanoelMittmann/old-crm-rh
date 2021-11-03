import React from 'react'
import { MenuOptionsContainer, OptionsMenu, OptionsMenuItem } from './style.js'

const MenuOptions = ({id, chosenOption}) => {
    
    return (
        <MenuOptionsContainer>
            <OptionsMenu>

                <OptionsMenuItem onClick={() => chosenOption(id)}>
                    Editar Projeto
                </OptionsMenuItem>

            </OptionsMenu>
        </MenuOptionsContainer>
    )
}

export default MenuOptions
