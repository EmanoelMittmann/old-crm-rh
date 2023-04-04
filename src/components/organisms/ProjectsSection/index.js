import React from 'react'

import ProjectsListHeader from '../../atoms/ProjectsListHeader'
import ProjectsInputs from '../../molecules/ProjectsInputs/index.js'
import ProjectsListItem from '../../molecules/ProjectsListItem'
import { ProjectsSectionContainer } from './style.js'

const ProjectsSection = () => {

    return (
        <>
            <ProjectsInputs />
            <ProjectsListHeader />
            <ProjectsListItem />
        </>


    )
}

export default ProjectsSection;