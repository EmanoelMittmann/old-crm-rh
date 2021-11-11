import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setProjectList } from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import CloseButton from '../../atoms/Buttons/CloseButton/index.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputSelectEdit from '../../atoms/InputSelectEdit/index.js'
import {
    ModalContainerButtons,
    ModalTitle,
    ModalContainer,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInputSelect } from './style.js'
import { formatFirstLetter } from '../../utils/formatFirstLetter.js'
import { useHistory } from 'react-router'

export const ModalProjectStatus = ({CloseButtonClickHandler, statusId, projectId}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [statusOptions, setStatusOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState('')

    const getProjectTypeList = async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectStatus`,
        }); 
        const newStatusOptions = formatFirstLetter(data.data)
        setStatusOptions(newStatusOptions); 
        return data;
    }

    console.log(projectId, statusId, +selectedOption);

    const updateStatusProject = async () => {

        try{
            await api({
                method:'patch',     
                url:`/updateStatusProject/${projectId}`,
                data: {
                    project_status_id: +selectedOption
                }
    
            }); 

            const {data} = await api({
                method:'get',     
                url:`/project`,
            }); 
    
            dispatch(setProjectList(data.data))
            
        }catch(err){
            if(err.request?.status === 401){
                history.push("/");
            }
        }
        

        CloseButtonClickHandler()
    }


    useEffect(() => {
        getProjectTypeList()
    }, [])


    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.6em">
                    Status
                </ModalTitle>
                <ContainerInputSelect>
                    <InputSelectEdit
                    optionId={statusId}
                    setSelectedOption={setSelectedOption}
                    options={statusOptions}
                    width="350px"
                    />
                </ContainerInputSelect>
                <ModalContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton onClick={() => updateStatusProject(selectedOption)} margin="0 3.5em 0 1.7em">Salvar</SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}
