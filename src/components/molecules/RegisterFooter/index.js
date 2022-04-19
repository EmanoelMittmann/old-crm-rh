import React from 'react'
import CancelButton from '../../atoms/Buttons/CancelButton/style'
import DarkButton from '../../atoms/Buttons/DarkButton/style'
import { ContainerRegisterFooter, ContainerButtonsRegisterFooter } from './style'


const RegisterFooter = ({cancelButtonHandler, registerButtonHandler, buttonDescription, type, disabled}) => {
    return (
        <ContainerRegisterFooter>
            <ContainerButtonsRegisterFooter>
                <CancelButton 
                    onClick={() => cancelButtonHandler()}
                    type="button"
                >
                    Cancelar
                </CancelButton>

                <DarkButton
                    width="115px"
                    height="40px"
                    fontSize="0.84rem"
                    onClick={() => registerButtonHandler()}
                    type={type}
                    disabled={disabled}
                >
                    {buttonDescription}
                </DarkButton>
            </ContainerButtonsRegisterFooter>
        </ContainerRegisterFooter>
    )
}

export default RegisterFooter