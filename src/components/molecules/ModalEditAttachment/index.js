import React, { useState, useEffect } from 'react'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import {
    ModalTitle,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInputs, ContainerButtons, ProfessionalData, Img, DivHours, ContainerInputsSelect, ModalContainer } from './style.js'
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import api from '../../../api/api.js'
import ModalRed from '../ModalRed/index.js'
import MenuOptionsEditProject from '../../atoms/MenuOptionsEditProject/index.js'
import InputSelectWithLabel from '../../atoms/InputSelectWithLabel/index.js'
import InputSelect from '../../atoms/InputSelect/index.js'




const ModalEditAttachment = (
    { CloseButtonClickHandler, team, professionalClicked, editMember }) => {
    const [DataProfessional] = useState(team.find(professional => professional.id === professionalClicked))
    const [jobsMember, setJobsMember] = useState([]);
    const [status, setStatus] = useState('')
    const [jobSelected, setJobSelected] = useState(DataProfessional?.job_ ? DataProfessional?.job_ : DataProfessional.job.name)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [changeEstimatedTime, setChangeEstimatedTime] = useState(DataProfessional?.hours_mounths_estimated)
    const [changeEstimatedOvertime, setChangeEstimatedOvertime] = useState(DataProfessional?.extra_hours_estimated)
    const [newJob, setNewJob] = useState('')
 

    // console.log("DataProfessional: ", DataProfessional.job_);


    const optionStatus = [
        {
            id: 1,
            name: 'Ativo',
        },
        {
            id: 0,
            name: 'Inativo',
        }
    ]

    const handlerModal = () => {
        setModalIsVisible(true)

    };

    const getJobsMember = async () => {
        const { data } = await api({
            method: 'get',
            url: `/job/?limit=undefined`,
        });
        setJobsMember(data.data);
    };



    useEffect(() => {
        getJobsMember();

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
                        value={changeEstimatedTime}
                        onChange={e => setChangeEstimatedTime(e.target.value)}
                        type="text"
                        label="Horas Mensais"
                        widthContainer="45%"
                        padding="0em 0 1em 0"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                    <InputWithLabel
                        value={changeEstimatedOvertime}
                        onChange={e => setChangeEstimatedOvertime(e.target.value)}
                        type="text"
                        label="Horas extras"
                        widthContainer="45%"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                </ContainerInputs>
                <ContainerInputsSelect>
                    <InputSelect
                        onChange={(e) => setNewJob(e.target.value)}
                        value={jobSelected}
                        options={jobsMember}
                        placeHolder={jobSelected}
                        width="175px"
                        label="Cargo"
                    />
                    <InputSelect
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                        options={optionStatus}
                        placeHolder="Alterar status"
                        width="175px"
                    />
                    {isOpenModal &&
                        <MenuOptionsEditProject padding="0.1em 0.1em 0.1em 1em"
                            positionMenu="3em"
                            firstChosenOption={() => setStatus(prev => !prev)}
                        />
                    }
                </ContainerInputsSelect>
                <ContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>

                    <SaveButton
                        onClick={() => handlerModal(modalIsVisible)}
                        margin="0 3.5em 0 1.7em"
                    >
                        Salvar
                    </SaveButton>
                    {modalIsVisible && (
                        <ModalRed
                            id={professionalClicked}
                            redButtonClickHandler={() => {
                                const jobName = jobsMember.find(
                                    (job) => job.id === Number(newJob)
                                )?.name
                                editMember(professionalClicked, changeEstimatedTime, changeEstimatedOvertime, jobName, status)
                            }}
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