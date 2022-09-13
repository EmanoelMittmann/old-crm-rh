import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa';


import api from '../../../api/api.js'
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
    ContainerTrashIcon,
    ContainerRegisterProjectTeam
} from './style.js'
import { formatFirstLetter } from '../../utils/formatFirstLetter.js';
import { BlueButton } from '../../atoms/Buttons/BlueButton/style.js'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputSelectWithLabel from '../../atoms/InputSelectWithLabel'
import InputText from '../../atoms/InputText'
import { ListHeaderContainer, ListHeaderTitle } from '../../atoms/ListHeader/style.js'
import ModalDelete from '../../molecules/ModalDelete'

const RegisterProjectTeam = ({ payloadTeam, setPayloadTeam }) => {
    const [hoursMonth, setHoursMonth] = useState('')
    //Todos os possíveis membros do time
    const [allProfessionals, setAllProfessionals] = useState([])
    //Membro do time selecionado
    const [professionalSelected, setProfessionalSelected] = useState(null)
    //Membros do time
    const [teamMembers, setTeamMembers] = useState([])
    //reset Inputs
    const [reset, setReset] = useState(true)

    const [teamMemberDeleteId, setTeamMemberDeleteId] = useState(0)
    const [modalIsVisible, setModalIsVisible] = useState(false)


    const CloseButtonClickHandler = () => {
        setModalIsVisible(false)
    }

    const getAllProfessionals = async () => {
        const { data } = await api({
            method: 'get',
            url: `/user`,
        });

        const formattedAllProfessionals = formatFirstLetter(data)

        setAllProfessionals(formattedAllProfessionals)

        return data;
    }


    const setTeamMemberClickHandler = () => {

        // o profissional selecionado é vinculado ao time

        //Informações do profissional selecionado
        const newTeamMember = allProfessionals.filter((profes) => {
            return profes.id == professionalSelected
        })

        const [{ id, name, avatar, job_id }] = newTeamMember

        const newTeamMembers = [...teamMembers, {
            user_id: id,
            name: name,
            avatar: avatar,
            job: job_id,
            hours: +hoursMonth,
            trash_color: '#DCE0E4'
        }];

        //Validação para se o membro do time já existe
        const memberAlreadyExist = teamMembers.find((member) => {
            return member.user_id == id
        })

        if (!memberAlreadyExist) {
            setTeamMembers(newTeamMembers)
            setPayloadTeam(
                [...payloadTeam, {
                    user_id: Number(id),
                    workload: Number(hoursMonth)
                }]
            )
        }
    }

    const trashOnMouseEnterHandler = (currentMemberId) => {
        const newTrashColor = teamMembers.map(member => {
            if (member.user_id === currentMemberId) return { ...member, trash_color: '#CF0418' }

            return member;
        })

        return setTeamMembers(newTrashColor)
    }

    const trashOnMouseLeaveHandler = (currentMemberId) => {
        const newTrashColor = teamMembers.map(member => {
            if (member.user_id === currentMemberId) return { ...member, trash_color: '#DCE0E4' }

            return member;
        })

        return setTeamMembers(newTrashColor)
    }

    const deleteTeamMember = (memberId) => {
        const newTeamMembers = teamMembers.filter((member) => member.user_id !== memberId)

        setTeamMembers(newTeamMembers)
    }

    const trashIconClickHandler = (memberId) => {
        setTeamMemberDeleteId(memberId)
        setModalIsVisible(true)
    }

    useEffect(() => {

        setHoursMonth('')
        setReset(true)
        getAllProfessionals()

        if (professionalSelected !== null) {
            setReset(false)
        }

    }, [teamMembers, professionalSelected])



    return (
        <ContainerRegisterProjectTeam>
            <SecondaryText margin="0 0 2.5em 0">Time</SecondaryText>

            <RegisterProjectTeamForm>
                <InputSelectWithLabel
                    setSelectedOption={setProfessionalSelected}
                    options={allProfessionals}
                    placeholder="Time"
                    width="100%"
                    lineWidth="52%"
                    label="Selecionar time"
                    reset={reset}
                />
                <InputText
                    width="100%"
                    widthLine="25%"
                    placeholder="Horas/mês"
                    setTextValue={setHoursMonth}
                    value={hoursMonth}
                    type="number"
                />
                <BlueButton width="15%" onClick={() => setTeamMemberClickHandler()}>
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

            {teamMembers.map((member) => (
                <RegisterProjectTeamProfessional key={member.user_id}>
                    <ProfessionalInfo>
                        <ProfessionalProfilePicture>
                            <ProfilePicture src={member?.avatar || User} />
                        </ProfessionalProfilePicture>
                        <ProfessionalName>
                            {member.name}
                        </ProfessionalName>
                    </ProfessionalInfo>
                    <ProfessionalJob>
                        Desenvolvedor Frontend
                    </ProfessionalJob>
                    <ProfessionalHours>
                        {member.hours}
                    </ProfessionalHours>
                    {modalIsVisible && <ModalDelete
                        deleteHandler={deleteTeamMember}
                        id={teamMemberDeleteId}
                        CloseButtonClickHandler={CloseButtonClickHandler}
                    />}
                    <ContainerTrashIcon >
                        <FaTrashAlt
                            color={member.trash_color}
                            size="16px"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => trashOnMouseEnterHandler(member.user_id)}
                            onMouseLeave={() => trashOnMouseLeaveHandler(member.user_id)}
                            onClick={() => trashIconClickHandler(member.user_id)}
                        />
                    </ContainerTrashIcon>
                </RegisterProjectTeamProfessional>
            ))}

        </ContainerRegisterProjectTeam>
    )
}

export default RegisterProjectTeam;