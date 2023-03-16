import React from 'react'

import { InputLine } from '../DefaultInput/style.js'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
} from '../InputSelect/style.js'
import { ErrorMessage } from '../StyledComponents/generalStyle.js'

const InputSelectEdit = ({optionId, setSelectedOption, width, options, error, touched}) => {
    return (
        <InputLine width={width}>
            <InputSelectContainer width={width} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map(option => (
                    optionId === option.id &&
                    <InputSelectOption selected value={option.id}>
                    { option.name }
                    </InputSelectOption>
                ))}

                {options.map(option => (
                    optionId !== option.id &&
                    <InputSelectOption value={option.id}>
                    { option.name }
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            {error && touched && <ErrorMessage visible={error}>{error}</ErrorMessage>}
            <Img src={arrowPointingDown} alt="Lupa"/>
        </InputLine>
    )
}

export default InputSelectEdit;