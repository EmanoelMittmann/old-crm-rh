import React from 'react'

import ProjectsListHeader from '../../atoms/ProjectsListHeader'
import ProjectsInputs from '../../molecules/ProjectsInputs/index.js'
import ProjectsListItem from '../../molecules/ProjectsListItem'
import { ProjectsSectionContainer } from './style.js'

const ProjectsSection = () => {

    return (
        <ProjectsSectionContainer>
            <ProjectsInputs/>
            <ProjectsListHeader/>
            <ProjectsListItem/>
        </ProjectsSectionContainer>
    )
}

export default ProjectsSection;