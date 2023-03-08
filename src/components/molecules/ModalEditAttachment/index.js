import React, { useState, useEffect } from 'react'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import {
    ModalTitle,
    ModalOverlay
} from '../Modal/style.js'
import {
    ContainerInputs,
    ContainerButtons,
    ProfessionalData,
    Img,
    DivHours,
    ContainerInputsSelect,
    ModalContainer
} from './style.js'
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import api from '../../../api/api.js'
import InputSelect from '../../atoms/InputSelect/index.js'
import ModalRed from '../ModalRed/index.js'



const ModalEditAttachment = (
    { CloseButtonClickHandler, team, professionalClicked, editMember, setOpenModalEdit }) => {
    const [DataProfessional] = useState(team.find(professional => professional.id === professionalClicked))
    const [jobsMember, setJobsMember] = useState([]);
    const [status] = useState(DataProfessional?.status ? "Ativo" : "Inativo")
    const [jobSelected] = useState(DataProfessional?.job_ ? DataProfessional.job_ : DataProfessional.job.name)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [changeEstimatedTime, setChangeEstimatedTime] = useState(DataProfessional?.hours_mounths_estimated)
    const [changeEstimatedOvertime, setChangeEstimatedOvertime] = useState(DataProfessional?.extra_hours_estimated)
    const [newJob, setNewJob] = useState('')
    const [newStatus, setNewStatus] = useState(true)

    const optionStatus = [
        { id: 1, name: 'Ativo' },
        { id: 0, name: 'Inativo' }]


    const handlerModal = () => {
        setModalIsVisible(true)

    };

    const getJobsMember = async () => {
        const { data } = await api({
            method: 'get',
            url: `/job/`,
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
                <ProfessionalData padding="0.8em">
                    <Img src={DataProfessional.avatar} />
                    <span style={{width:"60%",paddingLeft: "0.5em"}}>{DataProfessional.name}</span>
                    <DivHours>
                        {DataProfessional.hours_mounths_estimated}
                    </DivHours>
                </ProfessionalData>
                <ContainerInputs>
                    <InputWithLabel
                        value={changeEstimatedTime}
                        onChange={e => setChangeEstimatedTime(e.target.value)}
                        type="number"
                        label="Horas Mensais"
                        widthContainer="45%"
                        padding="0em 0 1em 0"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                    <InputWithLabel
                        value={changeEstimatedOvertime}
                        onChange={e => setChangeEstimatedOvertime(e.target.value)}
                        type="number"
                        label="Horas extras"
                        widthContainer="45%"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                </ContainerInputs>
                <ContainerInputsSelect>
                    <InputSelect
                        onChange={(e) => setNewJob(e.target.value)}
                        options={jobsMember}
                        placeHolder={jobSelected}
                        width="175px"
                        label="Cargo"
                    />
                    <InputSelect
                        onChange={(e) => setNewStatus(e.target.value)}
                        options={optionStatus}
                        placeHolder={status}
                        width="175px"
                    />
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
                                setOpenModalEdit(false)
                                const jobName = jobsMember.find(
                                    (job) => job.id === Number(newJob)
                                )?.name;
                                if (jobName === undefined) {
                                    editMember(
                                        professionalClicked,
                                        changeEstimatedTime,
                                        changeEstimatedOvertime,
                                        jobSelected,
                                        newStatus
                                    );
                                } else {
                                    editMember(
                                        professionalClicked,
                                        changeEstimatedTime,
                                        changeEstimatedOvertime,
                                        jobName,
                                        newStatus
                                    );
                                }
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