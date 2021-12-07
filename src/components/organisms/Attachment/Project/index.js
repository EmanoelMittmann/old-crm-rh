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


const AttachmentProject = ({hoursMonth, id}) => {
    const [projects, setProjects] = useState([])
    const [projectSelected, setProjectSelected] = useState('')
    const [tableContent, setTableContent] = useState([])

     const calcPercentage = (projectHours) => Math.floor((100 * projectHours)/hoursMonth)


    const getTableContent = async () => {
        const {data} = await api({
            method:'get',     
            url:`/userProjects/user/${id}`
        })

        const content = data.map((project) => {
            const [{id, name, date_start, workload}] = data
            console.log(id, name, formatDate(date_start), workload);
            return {
                id: id,
                firstRow: name,
                secondRow: formatDate(date_start),
                thirdRow: workload,
                fourthRow: calcPercentage(workload)
            }
        })

        setTableContent(content);
    
    }


    const getProjects = async () => {
        const {data} = await api({
            method:'get',     
            url:'/project'
        })

        setProjects(data.data);
    }

    
    useEffect(() => {
        getProjects()
        id && getTableContent()
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

            <Table rows={tableContent}/>

        </AttachmentContainer>
    )
}

export default AttachmentProject;