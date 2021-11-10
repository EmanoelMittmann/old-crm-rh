import React from 'react'

import { OptionsContainer, OptionsMenu, OptionsMenuItem } from './style.js'
import {
    ReactComponent as OptionsIcon
  } from '../../../../assets/icons/options.svg'



const SettingsOptions = ({info, editListItem, toggleStatusOptions, openOptions}) => {

    return(
        <div>
            <OptionsContainer 
            onClick={() => openOptions(info)}
            color={info.clicked ? "#407BFF" : "#B7BDC2"}>
                <OptionsIcon/>
                {info.clicked && 
                    <OptionsMenu>

                        <OptionsMenuItem 
                        onClick={() => editListItem(info)}
                        >
                            Editar
                        </OptionsMenuItem>

                        <OptionsMenuItem 
                        onClick={() => toggleStatusOptions(info)}
                        >
                        {info.is_active ? "Desativar" : "Ativar"}
                        </OptionsMenuItem>

                    </OptionsMenu>
                }
            </OptionsContainer>
        </div>
    )
}

export default SettingsOptions;


