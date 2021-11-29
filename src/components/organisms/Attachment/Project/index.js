import React from 'react'

import {
    AttachmentContainer,
    AttachmentForm,
    AttachmentTableLine,
    ContainerTrashIcon
} from '../style'

import { formatFirstLetter } from '../../../utils/formatFirstLetter.js';
import { BlueButton } from '../../../atoms/Buttons/BlueButton/style.js'
import SecondaryText from '../../../atoms/SecondaryText/style'
import InputSelectWithLabel from '../../../atoms/InputSelectWithLabel'
import InputText from '../../../atoms/InputText'
import { ListHeaderContainer, ListHeaderTitle } from '../../../atoms/ListHeader/style.js'
import ModalDelete from '../../../molecules/ModalDelete'


const AttachmentProject = () => {
    return (
        <AttachmentContainer>
            <SecondaryText margin="0 0 2.5em 0">Time</SecondaryText>

            <AttachmentForm>
                {/* <InputSelectWithLabel
                setSelectedOption={setProfessionalSelected}
                options={allProfessionals}
                placeholder="Time"
                width="100%"
                lineWidth="52%"
                label="Selecionar time"
                reset={reset}
                /> */}
                <InputText
                    width="100%"
                    widthLine="25%"
                    placeholder="Horas/mês"
                    // setTextValue={setHoursMonth}
                    // value={hoursMonth}
                    type="number"
                />
                <BlueButton width="15%">
                    Vincular
                </BlueButton>
            </AttachmentForm>

            <ListHeaderContainer>
                <ListHeaderTitle width="35%">
                    Projeto
                </ListHeaderTitle>
                <ListHeaderTitle width="25%" margin="0">
                    Início do projeto
                </ListHeaderTitle>
                <ListHeaderTitle width="20%" margin="0">
                    Horas mensais
                </ListHeaderTitle>
                <ListHeaderTitle width="5%" margin="0">
                    %
                </ListHeaderTitle>
            </ListHeaderContainer>

            {/* {teamMembers.map((member) => (
                <AttachmentTableLine key={member.user_id}>
                    <ProfessionalInfo>
                        <ProfessionalProfilePicture>
                            <ProfilePicture src={member?.avatar || User}/>
                        </ProfessionalProfilePicture>
                        <ProfessionalName>
                            {member?.name}
                        </ProfessionalName>
                    </ProfessionalInfo>
                    <ProfessionalJob>
                        {member.job_name || member.job}
                    </ProfessionalJob>
                    <ProfessionalHours>
                        {member.workload}
                    </ProfessionalHours>
                    {modalIsVisible && <ModalDelete
                     deleteHandler={deleteTeamMember}
                     id={teamMemberDeleteId}
                     redButtonClickHandler={() => redButtonClickHandler(teamMemberDeleteId)}
                     CloseButtonClickHandler={CloseButtonClickHandler}
                     title="Excluir profissional"
                     message="Tem certeza que deseja excluir profissional?"
                     />}
                    <ContainerTrashIcon >
                        <FaTrashAlt 
                        color={member.trash_color}
                        size="16px"
                        style={{cursor: 'pointer', transition: 'color ease-in 0.3s'}}
                        onMouseEnter={() => trashOnMouseEnterHandler(member.user_id)}
                        onMouseLeave={() => trashOnMouseLeaveHandler(member.user_id)}
                        onClick={() => trashIconClickHandler(member.user_id)}
                        />
                    </ContainerTrashIcon>
                </AttachmentTableLine>
            ))} */}

        </AttachmentContainer>
    )
}

export default AttachmentProject;