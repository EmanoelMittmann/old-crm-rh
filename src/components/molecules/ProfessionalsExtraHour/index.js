import React, { useEffect, useState } from 'react'

import { InputRadio, LabelInputRadio } from '../../atoms/InputRadio/style.js'
import SecondaryText from '../../atoms/SecondaryText/style'
import {
    ContainerRegisterExtraHours,
    ContainerRadioButtons,
} from './style.js'

const ProfessionalsExtraHour = ({extraHour, setExtraHour,  setFieldValue, data}) => {
    const [componentJustRendered, setComponentJustRendered] = useState(false)
    const radioColor = state => state === extraHour ? "#919EAB" : "black";

    useEffect(() => {
        setComponentJustRendered(true) 
        if (data?.job_type === "FREELANCER") setFieldValue('extra_hour_activated', false)
    }, [data?.job_type])

      
    const overtimeNotAllowed = {
        ...(componentJustRendered && (data === undefined || data?.extra_hour_activated === false) && {checked: true})
    }

    const overtimeAllowed = {
        ...(componentJustRendered && data?.extra_hour_activated === true && {checked: true})
    }

    if(componentJustRendered && data?.extra_hour_activated === true){
        setExtraHour('extraHourActivated')
    }

    if (componentJustRendered && (data === undefined  || data?.extra_hour_activated === false)){
        setExtraHour('extraHourDisabled')
    }


   return (
        <ContainerRegisterExtraHours>
            <SecondaryText margin="0 0 2.5em 0">Hora extra</SecondaryText>
            <ContainerRadioButtons color={radioColor} onChange={(e) => {
               e.target.value === 'extraHourActivated'? setFieldValue('extra_hour_activated', true) : setFieldValue('extra_hour_activated', false)
              
                setComponentJustRendered(false)
            }}>
                <InputRadio
                    {...overtimeAllowed}
                    color={radioColor('extraHourDisabled')} 
                    type="radio"
                    name="extraHour"
                    value="extraHourActivated"
                    id="extraHourActivated"
                   disabled={data?.job_type === "FREELANCER"}
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