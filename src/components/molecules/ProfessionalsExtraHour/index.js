import React, { useEffect, useState } from 'react'

import { InputRadio, LabelInputRadio } from '../../atoms/InputRadio/style.js'
import SecondaryText from '../../atoms/SecondaryText/style'
import {
    ContainerRegisterExtraHours,
    ContainerRadioButtons,
} from './style.js'

const ProfessionalsExtraHour = ({extraHour, setExtraHour,  setFieldValue, data}) => {

    const radioColor = state => state === extraHour ? "#919EAB" : "black";
    const [componentJustRendered, setComponentJustRendered] = useState(false)

    useEffect(() => {
        setComponentJustRendered(true)        
    }, [])

    const overtimeNotAllowed = {
        ...(componentJustRendered && (data === undefined || data?.extra_hour_activated === false) && {checked: true})
    }

    const overtimeAllowed = {
        ...(componentJustRendered && data?.extra_hour_activated === true && {checked: true})
    }

    if(componentJustRendered && data?.extra_hour_activated === true){
        setExtraHour('extraHourActivated')
    }

    if(componentJustRendered && (data === undefined || data?.extra_hour_activated === false)){
        setExtraHour('extraHourDisabled')
    }

   return (
        <ContainerRegisterExtraHours>
            <SecondaryText margin="0 0 2.5em 0">Hora extra</SecondaryText>
            <ContainerRadioButtons onChange={(e) => {
                e.target.value === 'extraHourActivated' ? setFieldValue('extra_hour_activated', 1) : setFieldValue('extra_hour_activated', 0)
                setComponentJustRendered(false)
            }}>
                <InputRadio
                    {...overtimeAllowed}
                    color={radioColor('extraHourDisabled')} 
                    type="radio"
                    name="extraHour"
                    value="extraHourActivated"
                    id="extraHourActivated"
                />
                <LabelInputRadio color={radioColor('extraHourDisabled')} for="extraHourActivated">Permitir hora extra</LabelInputRadio>

                <InputRadio
                    {...overtimeNotAllowed}
                    color={radioColor('extraHourActivated')}
                    type="radio"
                    name="extraHour"
                    margin="0 0 0 3em"
                    value="extraHourDisabled"
                    id="extraHourDisabled"
                />
                <LabelInputRadio color={radioColor('extraHourActivated')}  for="extraHourDisabled">Não permitir hora extra</LabelInputRadio>
            </ContainerRadioButtons>
        </ContainerRegisterExtraHours>
    )
}

export default ProfessionalsExtraHour