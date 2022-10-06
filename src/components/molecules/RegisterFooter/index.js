import React from 'react'
import { useSelector } from 'react-redux'
import CancelButton from '../../atoms/Buttons/CancelButton/style'
import DarkButton from '../../atoms/Buttons/DarkButton/style'
import { ContainerRegisterFooter, ContainerButtonsRegisterFooter } from './style'


const RegisterFooter = ({cancelButtonHandler, registerButtonHandler, buttonDescription, type, disabled, form}) => {
    const isDisable = useSelector((state) => state.disableEditor);
    return (
        <ContainerRegisterFooter>
            <ContainerButtonsRegisterFooter>
                <CancelButton 
                    onClick={() => cancelButtonHandler()}
                    type="button"
                >
                    Cancelar
                </CancelButton>
                
                {!isDisable &&
                    <DarkButton
                        width="115px"
                        height="40px"
                        fontSize="0.84rem"
                        onClick={() => registerButtonHandler()}
                        type={type}
                        disabled={disabled}
                        form={form}
                    >
                        {buttonDescription}
                    </DarkButton>
                }
            </ContainerButtonsRegisterFooter>
        </ContainerRegisterFooter>
    )
}

export default RegisterFooter