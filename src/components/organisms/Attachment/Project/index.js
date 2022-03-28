import React, {useState, useEffect, useLayoutEffect} from 'react'
import { useParams } from 'react-router-dom'

import {
    AttachmentContainer,
    AttachmentForm,
} from '../style'

import api from '../../../../api/api'
import { formatDate } from '../../../utils/formatDate'
import { checkArraysDifference } from '../../../utils/checkArraysDifference'

import Table from '../../../atoms/Table'
import { BlueButton } from '../../../atoms/Buttons/BlueButton/style.js'
import InputSelectWithLabel from '../../../atoms/InputSelectWithLabel'
import InputWithLabel from '../../../atoms/InputWithLabel'
import SecondaryText from '../../../atoms/SecondaryText/style'
import ModalEditAttachment from '../../../molecules/ModalEditAttachment'
import ModalRed from '../../../molecules/ModalRed'


const AttachmentProject = ({ attachment, allOptions, data}) => {
    const { values } = data
    const [ rows, setRows] = useState([])
    
    const [projectSelected, setProjectSelected] = useState(null)
    const [hoursMonthProject, setHoursMonthProject] = useState('')
    const [overtime, setOvertime] = useState('')
    const [reset, setReset] = useState(true)
    
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [projectClicked, setProjectClicked] = useState('')
    const [hoursMonthEdit, setHoursMonthEdit] = useState('')
    const [overtimeEdit, setOvertimeEdit] = useState('')

    const [totalHours, setTotalHours] = useState(0)
    const [totalOvertime, setTotalOvertime] = useState(0)
    const [totalPercentage, setTotalPercentage] = useState(0)

    const [options, setOptions] = useState([])

    const { id } = useParams()

    const {projects, setProjects } = attachment

    const calcPercentage = (projectHours) => Math.trunc((100 * projectHours)/values.mounth_hours)

    const resetInputs = () => {
        setProjectSelected(null)
        setHoursMonthProject('')
        setOvertime('')
        setReset(true)
    }

    const resetTotal = () => {
        setTotalPercentage(0)
        setTotalOvertime(0)
        setTotalHours(0)
    }

    const calcTotalHours = () => {
        const allWorkload = rows?.map(project => {
            return project.thirdRow
        })
        const totalWorkload = allWorkload.reduce(function(acc, hours) {
            return +acc + +hours
        })
        setTotalHours(totalWorkload)
    }

    const calcTotalOvertime = () => {
        const allOvertime = rows?.map(project => {
            return project.fourthRow
        })
        const totalOvertime = allOvertime.reduce(function(acc, overtime) {
            return +acc + +overtime
        })
        return setTotalOvertime(totalOvertime)
    }

    const calcTotalPercentage = () => {
        const allPercentage = rows?.map(project => {
            return project.fifthRow
        })
        const totalPercentage = allPercentage.reduce(function(acc, overtime) {
            return +acc + +overtime
        })
        return setTotalPercentage(totalPercentage)
    }

    function handleRows() {
        setRows([])
        if(id) {
            projects.map( project => {
                const addProjectRows = {
                    id : project.id,
                    firstRow: project.name, 
                    secondRow: formatDate(project.date_start),
                    thirdRow: project.workload,
                    fourthRow: project.extra_hour_limit,
                    fifthRow: calcPercentage(project.workload),
                }
                setRows(oldState => [...oldState, addProjectRows])
            })
        }
        else {
            projects.map( project => {
                const data = allOptions.find(item => item.id == project.id)
                const addProjectRows = {
                    id : data.id,
                    firstRow: data.name, 
                    secondRow: formatDate(data.date_start),
                    thirdRow: project.workload,
                    fourthRow: project.extra_hour_limit,
                    fifthRow: calcPercentage(project.workload),
                }
                setRows(oldState => [...oldState, addProjectRows])
            })
        }
    }

    function addProject() {
        if(!projectSelected) return

        const selected = allOptions.find(project => project.id == projectSelected)
        console.log({selected})
        console.log({projectSelected})
        
        setProjects(oldState => [...oldState, {
            id: selected.id,
            workload: hoursMonthProject,
            extra_hour_limit: overtime
        }])

        resetInputs()
    }

    function editProject() {
        const edited = projects.map((project) => {
            if(project.id == projectClicked){
                return {...project, workload: hoursMonthEdit, extra_hour_limit: overtimeEdit}
            }
            if(project.id !== projectClicked){
                return project
            }
        })
        console.log({edited})
        setProjects(edited)
        setOpenModalEdit(false)
    }

    function removeProject() {
        const data = projects.filter((project) => project.id !== projectClicked)
        setProjects(data)
        setOpenModalDelete(false)
    }

    useLayoutEffect(() => {
        const optionsValid = checkArraysDifference({
            completeArray: allOptions,
            comparisonArray: projects, 
            key: 'id'
        })
        setOptions(optionsValid)
        handleRows()

        if(!projects.length) {

        }
    },[allOptions, projects])

    useEffect(() => {
        if(!rows.length) {
            return resetTotal()
        }
        calcTotalHours()
        calcTotalOvertime()
        calcTotalPercentage()
    },[rows])

    return (
        <AttachmentContainer>
            <SecondaryText margin="0 0 2.5em 0">Vincular Projetos</SecondaryText>

            <AttachmentForm>
                <InputSelectWithLabel
                    setSelectedOption={e => setProjectSelected(e.target.value)}
                    options={options}
                    placeholder="Time"
                    width="100%"
                    lineWidth="40%"
                    label="Selecionar projetos"
                    reset={reset} 
                />
                <InputWithLabel
                    width="100%"
                    widthContainer="25%"
                    label="Horas/mês"
                    onChange={e => setHoursMonthProject(e.target.value)}
                    value={hoursMonthProject}
                    type="number"
                    padding="0 2em 0 2em"
                    handleBlur={() => {}}
                />
                <InputWithLabel
                    width="100%"
                    widthContainer="25%"
                    label="Horas extras"
                    onChange={e => setOvertime(e.target.value)}
                    value={overtime}
                    type="number"
                    padding="0 2em 0 0"
                    handleBlur={() => {}}
                />
                <BlueButton onClick={() => addProject()} width="13%">
                    Vincular
                </BlueButton>
            </AttachmentForm>

            <Table 
                rows={rows}
                setOpenModalDelete={setOpenModalDelete}
                setOpenModalEdit={setOpenModalEdit}
                rowClicked={projectClicked}
                setRowClicked={setProjectClicked}
                totalHours={totalHours}
                totalOvertime={totalOvertime}
                totalPercentage={totalPercentage}
             />

            { openModalDelete && <ModalRed 
                CloseButtonClickHandler={() => setOpenModalDelete(false)}
                redButtonClickHandler={removeProject}
                title="Remover"
                message="Deseja realmente remover o projeto?"
                />
            }
            { openModalEdit && 
                <ModalEditAttachment
                    CloseButtonClickHandler={() => {
                        setOpenModalEdit(false)
                    }}
                    setWorkload={setHoursMonthEdit}
                    workload={hoursMonthEdit}
                    saveHandler={editProject}
                    setOvertime={setOvertimeEdit}
                    overtime={overtimeEdit}
                />
            }
        </AttachmentContainer>
    )
}

export default AttachmentProject