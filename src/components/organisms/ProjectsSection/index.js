import React from 'react'

import ProjectsListHeader from '../../atoms/ProjectsListHeader'
import ProjectsInputs from '../../molecules/ProjectsInputs/index.js'
import ProjectsListItem from '../../molecules/ProjectsListItem'
import { ProjectsSectionContainer, ContainerFooter } from './style.js'
import Footer from '../Footer'

const ProjectsSection = () => {

    return (
        <ProjectsSectionContainer>
            <ProjectsInputs/>
            <ProjectsListHeader/>
            <ProjectsListItem/>
            <ContainerFooter>
                <Footer
                // previousPage={}
                // nextPage={}
                // currentPage={}
                // firstPage={}
                // lastPage={}
                />
            </ContainerFooter>
        </ProjectsSectionContainer>
    )
}

export default ProjectsSection;