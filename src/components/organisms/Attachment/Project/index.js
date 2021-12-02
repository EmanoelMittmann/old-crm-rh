import React, {useState, useEffect} from 'react'

import {
    AttachmentContainer,
    AttachmentForm,
} from '../style'

import api from '../../../../api/api'
import { formatDate } from '../../../utils/formatDate'
import InputSelectWithLabel from '../../../atoms/InputSelectWithLabel'
import Table from '../../../atoms/Table'
import { BlueButton } from '../../../atoms/Buttons/BlueButton/style.js'
import SecondaryText from '../../../atoms/SecondaryText/style'
import InputText from '../../../atoms/InputText'
import { ContainerTable } from './style'


const AttachmentProject = () => {
    const [projects, setProjects] = useState([])
    const [projectSelected, setProjectSelected] = useState('')

    const getProjects = async () => {
        const {data} = await api({
            method:'get',     
            url:`/project`,
        })

        const newProjects = data?.data.map((project) => {
            return {...project, date_start: formatDate(project.date_start)}
        })

        setProjects(newProjects);
    }

    
    useEffect(() => {
        getProjects()
    }, [])


    return (
        <AttachmentContainer>
            <SecondaryText margin="0 0 2.5em 0">Vincular Projetos</SecondaryText>

            <AttachmentForm>
                <InputSelectWithLabel
                setSelectedOption={setProjectSelected}
                options={projects}
                placeholder="Time"
                width="100%"
                lineWidth="52%"
                label="Selecionar projetos"
                />
                <InputText
                    width="100%"
                    widthLine="25%"
                    placeholder="Horas/mês"
                    // setTextValue={setHoursMonth}
                    // value={hoursMonth}
                    type="number"
                />
                <BlueButton width="15%">
                    Vincular
                </BlueButton>

            </AttachmentForm>

            <Table rows={projects}/>

        </AttachmentContainer>
    )
}

export default AttachmentProject;