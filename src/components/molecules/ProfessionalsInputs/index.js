import React from 'react'

import { ProfessionalsInputsContainer } from './style.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'

const ProfessionalsInputs = () => {
    const options = [
        {
            name: "Status 1",
            id: "1"
        },

        {
            name: "Status 2",
            id: "2"
        }
    ]

    return (
        <ProfessionalsInputsContainer>
            <InputSearch lineWidth="280px" inputWidth="230px"/>
            <InputSelect
            options={options}
            // setSelectedOption={}
            placeholder="Tipo"
            width="220px"
            />
        </ProfessionalsInputsContainer>
    )
}

export default ProfessionalsInputs;