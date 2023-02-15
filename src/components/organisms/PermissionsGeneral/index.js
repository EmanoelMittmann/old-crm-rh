import React, { useState } from 'react'
import SecondaryText from '../../atoms/SecondaryText/style'
import { ContainerAbsolute, ContainerCheckBox, ContainerGeneral, SelectsItens } from './style'

export const PermissionsGeneral = () => {
    const [check, setCheck] = useState(false);


    return (
        <ContainerGeneral>
            <SecondaryText margin="2.5em 0 0 0">Gerais</SecondaryText>
            <ContainerAbsolute>
                <ContainerCheckBox>
                    <SelectsItens width="60%" content="flex-start">
                        <input
                            type="checkbox"
                            name="Relatórios"
                            id="box"
                            checked={check}
                            onChange={() => { }}
                        />
                        <p>Lançamento de Horas Extras</p>
                    </SelectsItens>
                    <SelectsItens width="60%" content="flex-start">
                        <input
                            type="checkbox"
                            name="Relatórios"
                            id="box"
                            checked={check}
                            onChange={() => { }}
                        />
                        <p>Lançamento de Notas Fiscais</p>
                    </SelectsItens>
                </ContainerCheckBox>
                
            </ContainerAbsolute>
        </ContainerGeneral>
    )
}
