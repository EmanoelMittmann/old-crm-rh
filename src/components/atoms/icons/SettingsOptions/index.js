import React, { forwardRef, useRef } from 'react'

import { OptionsContainer, OptionsMenu, OptionsMenuItem } from './style.js'
import {
    ReactComponent as OptionsIcon
  } from '../../../../assets/icons/options.svg'

const SettingsOptions = forwardRef(({info, editListItem, toggleStatusOptions, openOptions},ref) => {
    const {buttonRef,modalRef} = ref
    return(
        <div>
            <OptionsContainer 
            color={info.clicked ? "#407BFF" : "#B7BDC2"}>
                <OptionsIcon onClick={() => openOptions(info)} ref={buttonRef}/>
                {info.clicked && 
                    <OptionsMenu ref={modalRef}>

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
})

export default SettingsOptions;


