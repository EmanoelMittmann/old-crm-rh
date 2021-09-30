import React from 'react'
import Header from '../../organisms/Header'
import SectionTitle from '../../atoms/SectionTitle/style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import SectionTitleContainer from '../../atoms/SectionTitleContainer/style.js'
import SectionTitleIcon from '../../atoms/SectionTitleIcon/style.js'
import { ReactComponent as ProjectsIcon } from '../../../assets/icons/projects.svg'

const Projects = () => {
    
    return (
        <PagesContainer>
            <Header/>
            <SectionTitleContainer>
                <SectionTitleIcon>
                    <ProjectsIcon/>
                </SectionTitleIcon>
                <SectionTitle>Projetos</SectionTitle>
            </SectionTitleContainer>
        </PagesContainer>   
    )
}

export default Projects;
