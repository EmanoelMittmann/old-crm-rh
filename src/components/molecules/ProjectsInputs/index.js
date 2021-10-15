import React, { useState } from 'react'

import { ProjectsInputsContainer } from './style.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'

const ProjectsInputs = () => {

    const [selectedOption, setSelectedOption] = useState("")

    const projectsFilterTypesOptions = [
        {
            description: "Tipo 1",
            value: "1"
        },

        {
            description: "Tipo 2",
            value: "2"
        }
    ]

    const projectsFilterStatusOptions = [
        {
            description: "Status 1",
            value: "1"
        },

        {
            description: "Status 2",
            value: "2"
        }
    ]

    return (
        <ProjectsInputsContainer>
            <InputSearch lineWidth="280px" inputWidth="230px"/>
            <InputSelect
            options={projectsFilterTypesOptions}
            setSelectedOption={setSelectedOption}
            placeholder="Tipo"
            width="220px"
            />
            <InputSelect
            options={projectsFilterStatusOptions}
            setSelectedOption={setSelectedOption}
            placeholder="Status"
            width="230px"
            />
        </ProjectsInputsContainer>
    )
}

export default ProjectsInputs;