import React, { useState } from 'react'
import { useHistory } from 'react-router'

import api from '../../../api/api'
import ModalRed from '../../molecules/ModalRed'
import MenuOptions from '../../atoms/MenuOptions'
import {ReactComponent as OptionsIcon} from '../../../assets/icons/options.svg'
import { TeamMemberPic } from '../../atoms/TeamMemberPic/style.js'
import { 
    ContainerProfessionalsListItem,
    ProfessionalEmail,
    ProfessionalPhoneNumber,
    Professionalnfo,
    ProfessionalProfile,
    ProfessionalsListOptions,
    ContainerIconOptions,
    ProfessionalStatus,
    Badge
} from './style.js'

const ProfessionalsListItem = ({professional, getProfessionals}) => {

    const history = useHistory();
    const [optionClicked, setOptionClicked] = useState(false);
    const [menuOptionsisVisible, setMenuOptionsisVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const menuOptionsClicked = (professionalId) => {
        setMenuOptionsisVisible(!menuOptionsisVisible)
        setOptionClicked(professionalId)
    }
 
    const editProfessional = () => {
        history.push(`/professional/${professional.id}`)
    }

    const openModaldisableProfessional = () => {
        setOpenModal(true)
        setMenuOptionsisVisible(false)

        const name = professional.id === optionClicked  ? professional.name : "esse profissional"
        const status = professional.is_active ? 'inativar' : 'ativar'
        setModalMessage(`Deseja realmente ${status} ${name}?`)
    }

    const disableProfessional = async () => {
        try{
            await api({
                method:'put',     
                url:`/user/updateStatus/${optionClicked}`
            })
            setOpenModal(false)
            getProfessionals()
        } catch(error){
            console.log(error);
        }
    }

    return (
        <ContainerProfessionalsListItem key={professional.id}>
            <ProfessionalProfile>
                <TeamMemberPic margin="0 1.5em 0 0" width="45px" height="45px" src={professional.avatar}/>
                {professional.name}
            </ProfessionalProfile>
            <Professionalnfo>
                {professional.job.name}
            </Professionalnfo>
            <ProfessionalEmail>
                {professional.email}
            </ProfessionalEmail>
            <ProfessionalPhoneNumber>
                {professional.telephone_number}
            </ProfessionalPhoneNumber>
            <Professionalnfo>
                {professional.local}
            </Professionalnfo>
            <ProfessionalStatus>
                { professional.is_active === true 
                    ? <Badge bg='#E4F8DD' color='#229A16' > Ativo </Badge> 
                    : <Badge bg='#FFE2E1' color='#BB2B3F' > Inativo </Badge> }
            </ProfessionalStatus>
            <ProfessionalsListOptions optionsColor={
                professional.id == optionClicked && menuOptionsisVisible ? "#407BFF" : "#B7BDC2" }>
                <ContainerIconOptions onClick={() => menuOptionsClicked(professional.id)}>
                    <OptionsIcon/>
                </ContainerIconOptions>
            </ProfessionalsListOptions>
            { menuOptionsisVisible && professional.id == optionClicked &&
                <MenuOptions
                    positionMenu="13px"
                    firstOptionDescription="Editar"
                    secondOptionDescription={professional.is_active ? "Inativar" : "Ativar"}
                    firstChosenOption={editProfessional}
                    secondChosenOption={openModaldisableProfessional}
                    padding="0.3em 0.5em 0.3em 1.7em"
                    id={optionClicked}
                /> }
            { openModal && 
                <ModalRed 
                    CloseButtonClickHandler={() => setOpenModal(false)}
                    redButtonClickHandler={() => disableProfessional()}
                    title={professional.is_active === 1 ? "Inativar" : "Ativar"}
                    message={modalMessage}
                /> }
        </ContainerProfessionalsListItem>
    )
}

export default ProfessionalsListItem