import React from 'react'
import { ContainerStatusLabel } from './style.js'

const StatusSettings = ({name, textColor, buttonColor, width}) => {
    return (
        <ContainerStatusLabel buttonColor={buttonColor} textColor={textColor} >{name}</ContainerStatusLabel>
    )
}

export default StatusSettings;