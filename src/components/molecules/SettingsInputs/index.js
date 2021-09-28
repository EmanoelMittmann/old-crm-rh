import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputStatus from '../../atoms/InputStatus'
import { Container } from './style.js'

export const SettingsInputs = () => {
    return (
        <Container>
            <InputSearch/>
            <InputStatus/>
        </Container>
    )
}
