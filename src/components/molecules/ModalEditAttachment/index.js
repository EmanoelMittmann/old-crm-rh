import React, { useState, useEffect } from 'react'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import {
    ModalTitle,
    ModalContainer,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInputs, ContainerButtons, ProfessionalData, Img, DivHours, ContainerInputsSelect } from './style.js'
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import api from '../../../api/api.js'
import InputSelect from '../../atoms/InputSelect/index.js'




const ModalEditAttachment = ({ CloseButtonClickHandler, saveHandler, setWorkload, overtime, setOvertime, team, professionalClicked,}) => {
    const [hoursPofessional] = useState(team.find(professional => professional.id === professionalClicked))
    const [jobsMember, setJobsMember] = useState([]);
    const [jobSelected, setJobSelected] = useState('');


    // console.log(jobsMember);
    console.log(hoursPofessional);
 
    const getJobsMember = async () => {
        const { data } = await api({
            method: 'get',
            url: `/job/?limit=undefined`,
        });
        data.data.push({ name: 'Selecione o cargo' });
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
                    <Img src={hoursPofessional.avatar} /> <p>{hoursPofessional.name}</p><DivHours>{hoursPofessional.extra_hours_performed
}</DivHours>
                </ProfessionalData>
                <ContainerInputs>
                    <InputWithLabel
                        value={hoursPofessional.extra_hours_performed
}
                        onChange={e => setWorkload(e.target.value)}
                        label="Horas Mensais"
                        widthContainer="50%"
                        padding="0em 0 1em 0"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                    <InputWithLabel
                        value={overtime}
                        onChange={e => setOvertime(e.target.value)}
                        label="Horas extras"
                        widthContainer="50%"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                </ContainerInputs>

                <ContainerInputsSelect>
                    <InputSelect
                        onChange={(e) => setJobSelected(e.target.value)}
                        options={jobsMember}
                        placeHolder="Selecione o cargo"
                        width="220px"
                    />
                </ContainerInputsSelect>
                <ContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton
                        onClick={saveHandler}
                        margin="0 3.5em 0 1.7em"
                    >
                        Salvar
                    </SaveButton>
                </ContainerButtons>
            </ModalContainer>
            <ModalOverlay />
        </div>
    )
}

export default ModalEditAttachment