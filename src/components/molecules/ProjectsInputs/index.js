import React, { useState } from 'react'

import { ProjectsInputsContainer } from './style.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'

const ProjectsInputs = () => {

    const [selectedOption, setSelectedOption] = useState("")

    const projectsFilterTypesOptions = [
        {
            name: "Tipo 1",
            id: "1"
        },

        {
            name: "Tipo 2",
            id: "2"
        }
    ]

    const projectsFilterStatusOptions = [
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