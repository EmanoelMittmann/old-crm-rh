import React from 'react'
import { ContainerStatusLabel } from './style.js'

const StatusLabel = ({name, textColor, buttonColor, width}) => {
    return (
        <ContainerStatusLabel buttonColor={buttonColor} textColor={textColor} >{name}</ContainerStatusLabel>
    )
}

export default StatusLabel;