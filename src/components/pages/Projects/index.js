import React from 'react'
import { useHistory } from 'react-router'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import { ProjectsContainer, RegisterProjectsContainer } from './style.js'
import Header from '../../organisms/Header'
import ProjectsSection from '../../organisms/ProjectsSection'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as ProjectsIcon } from '../../../assets/icons/projects.svg'

const Projects = () => {
    const history = useHistory()

    const registerProjectHandler = () => {
        history.push("/project");
    }
    
    return (
        <PagesContainer>
            <Header/>
            <RegisterProjectsContainer>
                <SectionTitleContainer>
                    <SectionTitleIcon>
                        <ProjectsIcon/>
                    </SectionTitleIcon>
                    <SectionTitle>Projetos</SectionTitle>
                </SectionTitleContainer>
                <DarkButton 
                onClick={registerProjectHandler}
                width="200px"
                height="42px"
                margin="0 5% 0 0">
                    Cadastrar novo
                </DarkButton>
            </RegisterProjectsContainer>

            <ProjectsContainer>
                <ProjectsSection/>
            </ProjectsContainer>
        </PagesContainer>   
    )
}

export default Projects;
