import React, { useState, useEffect } from 'react'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import {
    ModalTitle,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInputs, ContainerButtons, ProfessionalData, Img, ModalStatus, DivHours,OpenModal,ContainerInputsSelect, ModalContainer } from './style.js'
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import api from '../../../api/api.js'
import InputSelect from '../../atoms/InputSelect/index.js'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Badge } from '../../atoms/Badge/index.js'
import MenuOptions from '../../atoms/MenuOptions/index.js'
import ModalRed from '../ModalRed/index.js'
import { BadgeProject } from '../../atoms/BadgeProject/index.js'
import MenuOptionsEditProject from '../../atoms/MenuOptionsEditProject/index.js'




const ModalEditAttachment = (
    { CloseButtonClickHandler, redButtonClickHandler, setWorkload, setOvertime, team, setOpenModalEdit, professionalClicked, status }) => {
    const [DataProfessional] = useState(team.find(professional => professional.id === professionalClicked))
    const [jobsMember, setJobsMember] = useState([]);
    const [isActive , setisActive] = useState(true)
    const [jobSelected, setJobSelected] = useState(DataProfessional.job_ ? DataProfessional.job_ : DataProfessional.job.name);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const[userStatus, setUserstatus] = useState(status)
    
    console.log("DataProfessional: ", DataProfessional);

    console.log("status",status)

    const professionalClickHandler = () => {
        setIsOpenModal(prev => !prev)
        setOpenModalEdit(true)
        
    }
    const saveHandlerModal =() =>{
        setModalIsVisible(true)
    };

    const getJobsMember = async () => {
        const { data } = await api({
            method: 'get',
            url: `/job/?limit=undefined`,
        });
        setJobsMember(data.data);
    };

    const saveHandler = () =>{
        if (professionalClicked){

        }
    }

    useEffect(() => {
        getJobsMember();
        saveHandler()
    }, [jobSelected]);

    return (
        <div>
            <ModalContainer>
                <ModalTitle padding="1.3em 1.3em 1.3em 1.6em">
                    <CloseButtonCircle CloseButtonClickHandler={CloseButtonClickHandler} />
                    Editar Dados do Profissional
                </ModalTitle>
                <ProfessionalData padding="0.8em 2em 0.8em 0.8em">
                    <Img src={DataProfessional.avatar} />
                    <p>{DataProfessional.name}</p>
                    <DivHours>
                        {DataProfessional.hours_mounths_estimated}
                    </DivHours>
                </ProfessionalData>
                <ContainerInputs>
                    <InputWithLabel
                        value={DataProfessional.hours_mounths_estimated}
                        onChange={e => setWorkload(e.target.value)}
                        label="Horas Mensais"
                        widthContainer="45%"
                        padding="0em 0 1em 0"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                    <InputWithLabel
                        value={DataProfessional.extra_hours_estimated}
                        onChange={e => setOvertime(e.target.value)}
                        label="Horas extras"
                        widthContainer="45%"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                </ContainerInputs>

                <ContainerInputsSelect>
                    <InputSelect
                        onChange={(e) => setJobSelected(e.target.value)}
                        options={jobsMember}
                        placeHolder={jobSelected}
                        width="175px"
                    />
                    <ModalStatus >
                        <BadgeProject
                            status={isActive === false ? status.ATIVO : status.INATIVO}
                        />
                          <OpenModal>
                        <BsThreeDotsVertical 
                            color="#919EAB"
                            fontSize="25px"
                            onClick={() => professionalClickHandler()}
                        />
                        </OpenModal>
                    </ModalStatus>

                    {isOpenModal &&
                        <MenuOptionsEditProject padding="0.1em 0.1em 0.1em 1em"
                        positionMenu="3em"
                        firstChosenOption={() => setisActive(prev => !prev)}
                        firstOptionDescription={isActive === false ? "Ativo" : "Inativo"}
                        />
                    }
                </ContainerInputsSelect>
                <ContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                   
                    <SaveButton
                        onClick={() => saveHandlerModal(modalIsVisible)}
                        margin="0 3.5em 0 1.7em"
                    >
                        Salvar
                    </SaveButton>
                    {modalIsVisible && (
                        <ModalRed
                            id={professionalClicked}
                            redButtonClickHandler={() => saveHandler()}
                            CloseButtonClickHandler={() => setModalIsVisible(false)}
                            title="Alterar dados do profissional"
                            message="Deseja realmente alterar dados do profissional?"
                        />

                    )}
                </ContainerButtons>
            </ModalContainer>
            <ModalOverlay />
        </div>
    )
}

export default ModalEditAttachment