import React, { useState } from 'react'
import SecondaryText from '../../atoms/SecondaryText/style'
import { ContainerAbsolute, ContainerCheckBox, ContainerGeneral, SelectsItens } from './style'

export const PermissionsGeneral = () => {
    const [permissions, setPermissions] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [checked, setChecked] = useState(false)
    const [disabled, isDisabled] = useState(false)



    return (
         <ContainerGeneral>
                <SecondaryText margin="2em 0 0 0">Gerais</SecondaryText>
                <ContainerAbsolute>
                    <ContainerCheckBox>
                        <SelectsItens width="60%" content="flex-start">
                            <input
                                type="checkbox"
                                name="permissions"
                                id="throwOvertime"
                                value='throwOvertime'
                                disabled={disabled}
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)} />
                            <p>Lançamento de Horas Extras</p>
                        </SelectsItens>
                        <SelectsItens width="60%" content="flex-start">
                            <input
                                type="checkbox"
                                name="permissions"
                                id="launchNote"
                                value='launchNote'
                                disabled={disabled}
                                checked={checked}
                                onChange={() => setChecked(!checked)} />
                            <p>Lançamento de Notas Fiscais</p>
                        </SelectsItens>
                    </ContainerCheckBox>

                </ContainerAbsolute>
            </ContainerGeneral>
    )
}
