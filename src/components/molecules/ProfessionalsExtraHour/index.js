import React from 'react'
import { useEffect, useState } from 'react'

import { InputRadio, LabelInputRadio } from '../../atoms/InputRadio/style.js'
import SecondaryText from '../../atoms/SecondaryText/style'
import {
    ContainerRegisterExtraHours,
    ContainerRadioButtons,
} from './style.js'

const ProfessionalsExtraHour = ({extraHour, setExtraHour}) => {

    const radioColor = state => state === extraHour ? "#919EAB" : "black";
    const [componentJustRendered, setComponentJustRendered] = useState(false);

    useEffect(() => {
        setComponentJustRendered(true)
    }, [])

    const attributeChecked = {
        ...(componentJustRendered && {checked: true})
    }

   return (
        <ContainerRegisterExtraHours>
            <SecondaryText margin="0 0 2.5em 0">Hora extra</SecondaryText>
            <ContainerRadioButtons onChange={(e) => {
                setExtraHour(e.target.value)
                setComponentJustRendered(false)
            }}>
                <InputRadio
                color={radioColor('extraHourDisabled')} 
                type="radio"
                name="extraHour"
                value="extraHourActivated"
                id="extraHourActivated"/>
                <LabelInputRadio color={radioColor('extraHourDisabled')} for="extraHourActivated">Permitir hora extra</LabelInputRadio>
                <InputRadio
                {...attributeChecked}
                color={radioColor('extraHourActivated')}
                type="radio"
                name="extraHour"
                margin="0 0 0 3em"
                value="extraHourDisabled"
                id="extraHourDisabled"/>
                <LabelInputRadio color={radioColor('extraHourActivated')}  for="extraHourDisabled">Não permitir hora extra</LabelInputRadio>
            </ContainerRadioButtons>
        </ContainerRegisterExtraHours>
    )
}

export default ProfessionalsExtraHour;