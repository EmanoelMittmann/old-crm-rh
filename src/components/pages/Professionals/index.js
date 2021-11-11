import React from 'react'

import ProfessionalsSection from '../../organisms/ProfessionalsSection'
import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import { RegisterProjectsContainer, ProjectsContainer } from './style.js'
import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as JobIcon } from '../../../assets/icons/job.svg'
import { useHistory } from "react-router-dom";

const Professionals = () => {
    const history = useHistory()

      const handleRegister = () => {
        return history.push("/professional");
      }
    
    return (
        <PagesContainer>
            <Header/>
            <RegisterProjectsContainer>
                <SectionTitleContainer>
                    <SectionTitleIcon>
                        <JobIcon/>
                    </SectionTitleIcon>
                    <SectionTitle>Profissionais</SectionTitle>
                </SectionTitleContainer>
                <DarkButton 
                onClick={handleRegister}
                width="200px"
                height="42px"
                margin="0 5% 0 0">
                    Cadastrar novo
                </DarkButton>
            </RegisterProjectsContainer>
            <ProjectsContainer>
                <ProfessionalsSection/>
            </ProjectsContainer>

        </PagesContainer>
    )
}

export default Professionals;

