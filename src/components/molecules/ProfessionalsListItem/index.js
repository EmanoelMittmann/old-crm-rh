import React, { useState } from 'react'
import { useHistory } from 'react-router'

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
    ContainerIconOptions
} from './style.js'

const ProfessionalsListItem = ({professional}) => {

    const history = useHistory();
    const [optionClicked, setOptionClicked] = useState(false);
    const [menuOptionsisVisible, setMenuOptionsisVisible] = useState(false);

    const menuOptionsClicked = (professionalId) => {
        setMenuOptionsisVisible(!menuOptionsisVisible)
        setOptionClicked(professionalId)
    }
 
    const editProfessional = () => {
        history.push({
            pathname: "/professional",
            state: { professionalId: professional.id }
          })
    }

    const disableProfessional = () => {

    }

    return (
        <ContainerProfessionalsListItem>
            <ProfessionalProfile>
                    <TeamMemberPic margin="0 1.5em 0 0" width="45px" height="45px" src={professional.avatar}/>
                    {professional.name}
                </ProfessionalProfile>
                <Professionalnfo>
                    {professional.job}
                </Professionalnfo>
                <ProfessionalEmail>
                    {professional.email}
                </ProfessionalEmail>
                <ProfessionalPhoneNumber>
                    {professional.phone_number}
                </ProfessionalPhoneNumber>
                <Professionalnfo>
                    {professional.place}
                </Professionalnfo>
                <ProfessionalsListOptions optionsColor={
                professional.id == optionClicked && menuOptionsisVisible ? "#407BFF" : "#B7BDC2"}>
                    <ContainerIconOptions onClick={() => menuOptionsClicked(professional.id)}>
                        <OptionsIcon/>
                    </ContainerIconOptions>
                </ProfessionalsListOptions>
                {menuOptionsisVisible && professional.id == optionClicked &&
                    <MenuOptions
                    positionMenu="13px"
                    firstOptionDescription="Editar"
                    secondOptionDescription="Inativar"
                    firstChosenOption={editProfessional}
                    secondChosenOption={disableProfessional}
                    padding="0.3em 0.5em 0.3em 1.7em"
                    id={optionClicked}
                    />
                }
        </ContainerProfessionalsListItem>
    )
}

export default ProfessionalsListItem;