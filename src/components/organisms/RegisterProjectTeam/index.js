import React, { useState } from 'react'

import User from '../../../assets/user.png'
import {
    RegisterProjectTeamForm,
    RegisterProjectTeamProfessional,
    ProfessionalInfo,
    ProfessionalProfilePicture,
    ProfessionalName,
    ProfessionalJob,
    ProfessionalHours,
    ProfilePicture,
    ContainerTrashIcon
} from './style.js'
import { BlueButton } from '../../atoms/Buttons/BlueButton/style.js'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputWithLabel from '../../atoms/InputWithLabel'
import InputText from '../../atoms/InputText'
import { ListHeaderContainer, ListHeaderTitle } from '../../atoms/ListHeader/style.js'

const RegisterProjectTeam = () => {
    const [projectTeam, setProjectTeam] = useState()
    const [hoursMonth, setHoursMonth] = useState()

    return (
        <div>
            <SecondaryText margin="0 0 2.5em 0">Dados do projeto</SecondaryText>

            <RegisterProjectTeamForm>
                <InputWithLabel
                label="Selecionar time"
                setinputWithLabelValue={setProjectTeam}
                width="100%"
                widthContainer="50%"
                />
                <InputText
                    width="100%"
                    widthLine="30%"
                    placeholder="Horas/mês"
                    setTextValue={setHoursMonth}
                />
                <BlueButton width="12%">
                    Vincular
                </BlueButton>
            </RegisterProjectTeamForm>

            <ListHeaderContainer>
                <ListHeaderTitle width="37.5%">
                    Profissional
                </ListHeaderTitle>
                <ListHeaderTitle width="37.5%" margin="0">
                    Cargo
                </ListHeaderTitle>
                <ListHeaderTitle width="25%" margin="0">
                    Horas mensais
                </ListHeaderTitle>
            </ListHeaderContainer>
            <RegisterProjectTeamProfessional>
                <ProfessionalInfo>
                    <ProfessionalProfilePicture>
                        <ProfilePicture src={User}/>
                    </ProfessionalProfilePicture>
                    <ProfessionalName>
                        Juliana Cardoso
                    </ProfessionalName>
                </ProfessionalInfo>
                <ProfessionalJob>
                   Desenvolvedor Frontend
                </ProfessionalJob>
                <ProfessionalHours>
                    120
                </ProfessionalHours>
                <ContainerTrashIcon>
                    Trash
                </ContainerTrashIcon>
            </RegisterProjectTeamProfessional>
        </div>
    )
}

export default RegisterProjectTeam;