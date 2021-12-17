import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

import {
    AttachmentContainer,
    AttachmentForm,
    AttachmentTableLine,
    ContainerIcon
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
import MenuOptions from '../../../atoms/MenuOptions';
import ModalEditAttachment from '../../../molecules/ModalEditAttachment';

const AttachmentTeam = ({projectId, componentRendered, editData, payloadTeam, setPayloadTeam}) => {
    const [hoursMonth, setHoursMonth] = useState('')
    const [overtime, setOvertime] = useState('')
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

    const [menuOptionsisVisible, setMenuOptionsisVisible] = useState(false)
    const [professionalClicked, setProfessionalClicked] = useState('')
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [hoursMonthEdit, setHoursMonthEdit] = useState('')
    const [overtimeEdit, setOvertimeEdit] = useState('')



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
            extra_hour_limit: +overtime,
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
                url:`/userProjects/project/${projectId}`,
                data: {
                    user_id: deleteTeamMemberId,
                }
            });

            const {data} = await api({
                method:'get',     
                url:`/userProjects/project/${projectId}`,
            });

            setTeamMembers(data);
        }

        isEditing && deleteTeamMember()

    }, [deleteRealTime])

    ////////////////////// Funções usadas na edição em tempo real //////////////////////

        const addTeamMember = async () => {
            
            await api({
                method:'post',     
                url:`/userProjects/project/${projectId}`,
                data: {
                    user_id: professionalSelected,
                    workload: hoursMonth,
                    extra_hours_limit: overtime
                }
            });
            
          
                const {data} = await api({
                    method:'get',     
                    url:`/userProjects/project/${projectId}`,
                });

                
            setTeamMembers(data);
            
        }

    
     
     useEffect(() => {
 
         if(componentRendered){
             setTeamMembers(editData);
         }
 
     }, [componentRendered])

    
    //////////// Verificações para saber qual das duas edições está acontecendo //////////
    
    const professionalClickHandler = (memberId) => {
        setMenuOptionsisVisible(!menuOptionsisVisible)
        setProfessionalClicked(memberId)
    }

    const professionalMenuDelete = () => {
        setTeamMemberDeleteId(professionalClicked)
        setModalIsVisible(true)
        setMenuOptionsisVisible(false)
    }

    const editHandler = () => {
        setOpenModalEdit(true)
        setMenuOptionsisVisible(false)
    }

    
    const editHoursWhenEditing = async () => {
        await api({
            method:'put',     
            url: `/userProjects/project/${projectId}`,
            data: {
                user_id: professionalClicked,
	            workload: hoursMonthEdit,
                extra_hour_limit: overtimeEdit
            }
        })

        setOpenModalEdit(false)
    }

    const editHoursWhenRegistering = () => {

        const editedTeamMembers = teamMembers.map((professional) => {
            if(professional.id == professionalClicked){
                return {...professional, workload: hoursMonthEdit, extra_hour_limit: overtimeEdit}
            }

            if(professional.id !== professionalClicked){
                return professional;
            }
            
        })

        console.log(editedTeamMembers);
        setTeamMembers(editedTeamMembers)
        setOpenModalEdit(false)

    }

    useEffect(() => {

        setHoursMonth('')
        setOvertime('')
        setReset(true)

        console.log(teamMembers);
  
    }, [teamMembers])


    useEffect(() => {
        
        if(professionalSelected !== null){
            setReset(false)
        }
        
    }, [professionalSelected])

    /////////////////////////ver isso

    useEffect(() => {
        const teamArr = teamMembers.filter(professional => professional.id == professionalClicked)
        const [team] = teamArr
        setHoursMonthEdit(team?.workload)
        setOvertimeEdit(team?.extra_hour_limit)

    }, [openModalEdit])

    return (
        <AttachmentContainer>
            <SecondaryText margin="0 0 2.5em 0">Time</SecondaryText>

            <AttachmentForm>
                <InputSelectWithLabel
                setSelectedOption={setProfessionalSelected}
                options={allProfessionals}
                placeholder="Time"
                width="100%"
                lineWidth="40%"
                label="Selecionar time"
                reset={reset}
                />
                <InputText
                    width="100%"
                    widthLine="20%"
                    placeholder="Horas/mês"
                    setTextValue={setHoursMonth}
                    value={hoursMonth}
                    type="number"
                    margin="0 2em 0 2em"
                />
                 <InputText
                    width="100%"
                    widthLine="20%"
                    placeholder="Horas extras"
                    setTextValue={setOvertime}
                    value={overtime}
                    type="number"
                    margin="0 2em 0 0"
                />
                <BlueButton width="13%" onClick={() => isEditing ? addTeamMember() :  setTeamMemberClickHandler()}>
                    Vincular
                </BlueButton>
            </AttachmentForm>

            <ListHeaderContainer>
                <ListHeaderTitle width="21.8%" margin="3em" >
                    Profissional
                </ListHeaderTitle>
                <ListHeaderTitle width="21.8%" margin="0">
                    Cargo
                </ListHeaderTitle>
                <ListHeaderTitle width="21.8%" margin="0">
                    Horas mensais
                </ListHeaderTitle>
                <ListHeaderTitle width="21.8%" margin="0">
                    Horas Extras
                </ListHeaderTitle>
            </ListHeaderContainer>

            {teamMembers.map((member) => (
                <AttachmentTableLine key={member.id}>
                    <ProfessionalInfo>
                        <ProfessionalProfilePicture>
                            <ProfilePicture src={member?.avatar || User}/>
                        </ProfessionalProfilePicture>
                        <ProfessionalName>
                            {member?.name}
                        </ProfessionalName>
                    </ProfessionalInfo>
                    <ProfessionalJob>
                        {member.job.name}
                    </ProfessionalJob>
                    <ProfessionalHours>
                        {member.workload}
                    </ProfessionalHours>
                    <ProfessionalHours>
                        {member.extra_hour_limit}
                    </ProfessionalHours>
                    {modalIsVisible && <ModalRed
                     deleteHandler={deleteTeamMember}
                     id={teamMemberDeleteId}
                     redButtonClickHandler={() => redButtonClickHandler(teamMemberDeleteId)}
                     CloseButtonClickHandler={CloseButtonClickHandler}
                     title="Excluir profissional"
                     message="Tem certeza que deseja excluir profissional?"
                     />}
                    <ContainerIcon>
                        <BsThreeDotsVertical 
                        color="#919EAB"
                        onClick={() => professionalClickHandler(member.id)}
                        />
                    </ContainerIcon>
                    {menuOptionsisVisible && member.id == professionalClicked &&
                        <MenuOptions
                        positionMenu="25px"
                        firstOptionDescription="Editar"
                        secondOptionDescription="Excluir"
                        firstChosenOption={editHandler}
                        secondChosenOption={professionalMenuDelete}
                        padding="0.3em 0.5em 0.3em 1.7em"
                        id={professionalClicked}
                        />
                    }

                    {openModalEdit && <ModalEditAttachment
                    CloseButtonClickHandler={() => {
                        setOpenModalEdit(false)
                    }}
                    setWorkload={setHoursMonthEdit}
                    workload={hoursMonthEdit}
                    setOvertime={setOvertimeEdit}
                    overtime={overtimeEdit}
                    saveHandler={isEditing ? editHoursWhenEditing : editHoursWhenRegistering}
                    />
                    }
                </AttachmentTableLine>
            ))}

        </AttachmentContainer>
    )
}

export default AttachmentTeam;
