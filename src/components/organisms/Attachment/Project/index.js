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


const AttachmentProject = ({hoursMonth, id, limitValue}) => {
    const [projects, setProjects] = useState([])
    const [projectSelected, setProjectSelected] = useState('')
    const [tableContent, setTableContent] = useState([])
    const [hoursMonthProject, setHoursMonthProject] = useState('')

    const calcPercentage = (projectHours) => Math.trunc((100 * projectHours)/hoursMonth)
    const resetInputs = () => {
        setHoursMonthProject('')
        setProjectSelected('')
    }

    const getTableContent = async () => {
        const {data} = await api({
            method:'get',     
            url:`/userProjects/user/${id}`
        })

        console.log(data);

        const content = data.map((project) => {
        const {id, name, date_start, workload} = project
           
            return {
                id: id,
                firstRow: name,
                secondRow: formatDate(date_start),
                thirdRow: workload,
                fourthRow: calcPercentage(workload)
            }
        })
        console.log('esse aqui depois');

        setTableContent(content);
    
    }

    // busca os dados do profissional
    // dados dos projetos

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

    const addProjectEditing = async () => {
        const data = await api({
            method:'post',     
            url:`/userProjects/user/${id}`,
            data: {
                project_id: projectSelected,
                workload: hoursMonthProject,
                extra_hours_limit: limitValue
            }
        })
        console.log(data);

        getTableContent()
        resetInputs()
    }

    const addProjectRegistering = async () => {

        //getting the project that will be linked to the professional
        const {data} = await api({
            method:'get',     
            url: `/project/${projectSelected}`
        })

        const [{name, date_start}] = data

        setTableContent([...tableContent, {
            firstRow: name,
            secondRow: formatDate(date_start),
            thirdRow: hoursMonthProject,
            fourthRow: calcPercentage(hoursMonthProject)
        }]);
    }

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
                    setTextValue={setHoursMonthProject}
                    value={hoursMonthProject}
                    type="number"
                />
                <BlueButton onClick={() => {
                    id ? addProjectEditing() : addProjectRegistering()
                }} width="15%">
                    Vincular
                </BlueButton>

            </AttachmentForm>

            <Table rows={tableContent}/>

        </AttachmentContainer>
    )
}

export default AttachmentProject;