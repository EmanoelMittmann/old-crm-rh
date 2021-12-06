import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa';

import {
    AttachmentContainer,
    AttachmentForm,
    AttachmentTableLine,
    ContainerTrashIcon
} from '../style'
import {
    ProfessionalInfo,
    ProfessionalName,
    ProfessionalJob,
    ProfessionalHours,
    ProfilePicture,
    ProfessionalProfilePicture
} from './style.js'
import api from '../../../../api/api'
import User from '../../../../assets/user.png'
import { formatFirstLetter } from '../../../utils/formatFirstLetter.js';
import { BlueButton } from '../../../atoms/Buttons/BlueButton/style.js'
import SecondaryText from '../../../atoms/SecondaryText/style'
import InputSelectWithLabel from '../../../atoms/InputSelectWithLabel'
import InputText from '../../../atoms/InputText'
import { ListHeaderContainer, ListHeaderTitle } from '../../../atoms/ListHeader/style.js'
import ModalRed from '../../../molecules/ModalRed'

const AttachmentTeam = ({projectId, componentRendered, editData, payloadTeam, setPayloadTeam}) => {
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

    const [editTeamRealTime, setEditTeamRealTime] = useState(false)
    const [deleteRealTime, setDeleteRealTime] = useState(false)
    const [deleteTeamMemberId, setDeleteTeamMemberId] = useState(false)

    //////////////////////Funções usadas nos dois tipos de edição//////////////////////
   
    const isEditing = projectId ? true : false;
    console.log(isEditing)

    
    const CloseButtonClickHandler = () => {
        setModalIsVisible(false)
    }
    
    const redButtonClickHandler = (id) => {
        deleteTeamMember(id)
        CloseButtonClickHandler()
    }

    const getAllProfessionals = async () => {
        const {data} = await api({
            method:'get',     
            url:`/user`,
        });

        const formattedAllProfessionals = formatFirstLetter(data)

        setAllProfessionals(formattedAllProfessionals)

        return data;
    }


    useEffect(() => {
        getAllProfessionals()
    }, [])

    ////////////////////// Funções usadas na edição a nivel de front-end //////////////////////

    const trashOnMouseEnterHandler = (currentMemberId) => {
        const newTrashColor = teamMembers.map(member => {
            if(member.user_id === currentMemberId) return {...member, trash_color: '#CF0418'}
            
            return member;
        })

        return setTeamMembers(newTrashColor)
    }

    const trashOnMouseLeaveHandler = (currentMemberId) => {
        const newTrashColor = teamMembers.map(member => {
            if(member.user_id === currentMemberId) return {...member, trash_color: '#DCE0E4'}
            
            return member;
        })

        return setTeamMembers(newTrashColor)
    }

    const setTeamMemberClickHandler = () => {

        // o profissional selecionado é vinculado ao time
    
        //Informações do profissional selecionado
        const newTeamMember = allProfessionals.filter((profes) => {
            return profes.id == professionalSelected
        })
        
        const [{id, name, avatar, job}] = newTeamMember
        
        const newTeamMembers = [...teamMembers, {
            user_id: id,
            name: name,
            avatar: avatar,
            job_name: job?.name,
            workload: +hoursMonth,
            trash_color: '#DCE0E4'
        }];
        
        console.log(newTeamMembers);
            //Validação para se o membro do time já existe
             const memberAlreadyExist = teamMembers.find((member) => {
                return member.user_id == id
             })

            if(!memberAlreadyExist){
                setTeamMembers(newTeamMembers)
                setPayloadTeam(
                    [...payloadTeam, {
                    user_id: Number(id),
                    workload: Number(hoursMonth)
                    }]
                )
            }
        }

    const deleteTeamMember = (memberId) => {

        if(!isEditing) {
            const newTeamMembers = teamMembers.filter((member) => member.user_id !== memberId)
            setTeamMembers(newTeamMembers)
        }
        if(isEditing) {
            setDeleteTeamMemberId(memberId)

            setDeleteRealTime(true)

        }
    }


    useEffect(() => {
        setDeleteRealTime(false)

        const deleteTeamMember = async () => {
            await api({
                method:'delete',     
                url:`/userProjects`,
                data: {
                    user_id: deleteTeamMemberId,
                    project_id: projectId
                }
            });

            const {data} = await api({
                method:'get',     
                url:`/userProjects/${projectId}`,
            });

            const newTeam = data.map((member) => {
                return {...member, trash_color: '#DCE0E4'}
            })
            setTeamMembers(newTeam);
        }

        isEditing && deleteTeamMember()

    }, [deleteRealTime])

    ////////////////////// Funções usadas na edição em tempo real //////////////////////

    useEffect(() => {
        setEditTeamRealTime(false)

        const addTeamMember = async () => {
            await api({
                method:'post',     
                url:`/userProjects`,
                data: {
                    user_id: professionalSelected,
                    workload: hoursMonth,
                    project_id: projectId
                }
            });
    
            const {data} = await api({
                method:'get',     
                url:`/userProjects/${projectId}`,
            });
    
            const newTeam = data.map((member) => {
                return {...member, trash_color: '#DCE0E4'}
            })
            setTeamMembers(newTeam);
        }

        isEditing && addTeamMember();

    }, [editTeamRealTime])
     
     useEffect(() => {
 
         if(componentRendered){
             const newEditData = editData.map((member) => {
                 return {...member, trash_color: '#DCE0E4'}
             })
             setTeamMembers(newEditData);
             console.log(editData);
         }
 
     }, [componentRendered])

    
    //////////// Verificações para saber qual das duas edições está acontecendo ////////////
    
    
    const trashIconClickHandler = (memberId) => {
        setTeamMemberDeleteId(memberId)
        setModalIsVisible(true)
    }

    useEffect(() => {

        setHoursMonth('')
        setReset(true)
  
    }, [teamMembers])


    useEffect(() => {
        
        if(professionalSelected !== null){
            setReset(false)
        }
        
    }, [professionalSelected])


    return (
        <AttachmentContainer>
            <SecondaryText margin="0 0 2.5em 0">Time</SecondaryText>

            <AttachmentForm>
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
                <BlueButton width="15%" onClick={() => isEditing ? setEditTeamRealTime(true) :  setTeamMemberClickHandler()}>
                    Vincular
                </BlueButton>
            </AttachmentForm>

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
                    {modalIsVisible && <ModalRed
                     deleteHandler={deleteTeamMember}
                     id={teamMemberDeleteId}
                     redButtonClickHandler={() => redButtonClickHandler(teamMemberDeleteId)}
                     CloseButtonClickHandler={CloseButtonClickHandler}
                     title="Excluir profissional"
                     message="Tem certeza que deseja excluir profissional?"
                     />}
                    <ContainerTrashIcon>
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
            ))}

        </AttachmentContainer>
    )
}

export default AttachmentTeam;