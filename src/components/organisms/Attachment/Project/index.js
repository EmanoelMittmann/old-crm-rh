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
import ModalEditAttachment from '../../../molecules/ModalEditAttachment'
import ModalRed from '../../../molecules/ModalRed'


const AttachmentProject = ({hoursMonth, id, componentRendered, tableContent, setTableContent}) => {
    const [projects, setProjects] = useState([])
    const [projectSelected, setProjectSelected] = useState(null)
    const [hoursMonthProject, setHoursMonthProject] = useState('')
    const [hoursMonthContract, setHoursMonthContract] = useState('')
    const [reset, setReset] = useState(true)
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [projectClicked, setProjectClicked] = useState('')
    const [hoursMonthEdit, setHoursMonthEdit] = useState('')
    const [overtime, setOvertime] = useState('')
    const [overtimeEdit, setOvertimeEdit] = useState('')
    const [totalHours, setTotalHours] = useState(0)
    const [totalOvertime, setTotalOvertime] = useState(0)
    const [totalPercentage, setTotalPercentage] = useState(0)

    const calcPercentage = (projectHours) => Math.trunc((100 * projectHours)/hoursMonthContract)

    const resetInputs = () => {
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
        const allWorkload = tableContent?.map(project => {
            return project.thirdRow
        })
    
        const totalWorkload = allWorkload?.reduce(function(acc, hours) {
            return +acc + +hours;
        });

        return totalWorkload;
    }

    const calcTotalOvertime = () => {
        const allOvertime = tableContent?.map(project => {
            return project.fourthRow
        })
    
        const totalOvertime = allOvertime?.reduce(function(acc, overtime) {
            return +acc + +overtime;
        });

        return totalOvertime;
    }


    const deleteProjectWhenRegistering = () => {
        const newProjects = tableContent.filter((project) => project.id !== projectClicked)
        setTableContent(newProjects)
        setOpenModalDelete(false)
    }

    const deleteProjectWhenEditing = async () => {
        const {data} = await api({
            method:'delete',     
            url:`/user/${id}`,
            data: {
                project_id: projectClicked
            }
        })

        setOpenModalDelete(false)
        resetTotal()
        getTableContent()
    }

    const getTableContent = async () => {
        const {data} = await api({
            method:'get',     
            url:`/userProjects/user/${id}`
        })

        console.log(data);

        const content = data.map((project) => {
        const {id, name, date_start, workload, extra_hour_limit} = project
    
        
            return {
                id: id,
                firstRow: name,
                secondRow: formatDate(date_start),
                thirdRow: workload,
                fourthRow: extra_hour_limit,
                fifthRow: calcPercentage(workload)
            }
        })

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
        id && componentRendered && getTableContent()
        
    }, [hoursMonthContract])

    const addProjectWhenEditing = async () => {
        await api({
            method:'post',     
            url:`/userProjects/user/${id}`,
            data: {
                project_id: projectSelected,
                workload: hoursMonthProject,
                extra_hours_limit: overtime
            }
        })

        getTableContent()
        resetInputs()
    }

    const addProjectWhenRegistering = async () => {

        try{
            //getting the project that will be linked to the professional
            const {data} = await api({
                method:'get',     
                url: `/project/${projectSelected}`
            })

            const [{id: idProject, name, date_start}] = data

            //Validação para se o profissional já existe
            const projectAlreadyExist = tableContent.find((project) => {
                return idProject == project.id
            })

            if(!projectAlreadyExist){
                setTableContent([...tableContent, {
                    id: idProject,
                    firstRow: name,
                    secondRow: formatDate(date_start),
                    thirdRow: hoursMonthProject,
                    fourthRow: overtime,
                    fifthRow: calcPercentage(hoursMonthProject)
                }]);

                resetInputs()
            }
            
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(componentRendered && hoursMonth){
             setHoursMonthContract(hoursMonth)
        }
    }, [hoursMonth])
    //////////////////////////////////////////////////////

    useEffect(() => {
        
        if(projectSelected !== null){
            setReset(false)
        }
        
    }, [projectSelected])

    const editHoursWhenRegistering = () => {

        const editedProject = tableContent.map((row) => {
            if(row.id == projectClicked){
                return {...row, thirdRow: hoursMonthEdit, fourthRow: overtimeEdit}
            }

            if(row.id !== projectClicked){
                return row;
            }
            
        })

        setTableContent(editedProject)
        setOpenModalEdit(false)

    }

    const editHoursWhenEditing = async () => {
      
        await api({
            method:'put',     
            url: `/userProjects/user/${id}`,
            data: {
                project_id : projectClicked,
                workload: hoursMonthEdit,
                extra_hours_limit: overtimeEdit  
            }
        })

        getTableContent()
        setOpenModalEdit(false)
    }

    useEffect(() => {
        const projectArr = tableContent.filter(project => project.id == projectClicked)
        const [project] = projectArr
        setHoursMonthEdit(project?.thirdRow)
        setOvertimeEdit(project?.fourthRow)

    }, [openModalEdit])

    useEffect(() => {
        if(tableContent.length > 0){
            setTotalHours(calcTotalHours())
            setTotalOvertime(calcTotalOvertime())
            setTotalPercentage(calcPercentage(calcTotalHours()))
        } 
    }, [tableContent])


    return (
        <AttachmentContainer>
            <SecondaryText margin="0 0 2.5em 0">Vincular Projetos</SecondaryText>

            <AttachmentForm>
                <InputSelectWithLabel
                setSelectedOption={setProjectSelected}
                options={projects}
                placeholder="Time"
                width="100%"
                lineWidth="40%"
                label="Selecionar projetos"
                reset={reset}></InputSelectWithLabel>
                <InputText
                    width="100%"
                    widthLine="20%"
                    placeholder="Horas/mês"
                    setTextValue={setHoursMonthProject}
                    value={hoursMonthProject}
                    type="number"
                    margin="0 2em 0 2em"
                />

                <InputText
                    width="100%"
                    widthLine="20%"
                    placeholder="Horas extras"
                    setTextValue={setOvertime}
                    value={overtime}
                    type="number"
                    margin="0 2em 0 0"
                />

                <BlueButton onClick={() => {
                    id ? addProjectWhenEditing() : addProjectWhenRegistering()
                }} width="13%">
                    Vincular
                </BlueButton>

            </AttachmentForm>

            <Table 
            rows={tableContent}
            setOpenModalDelete={setOpenModalDelete}
            setOpenModalEdit={setOpenModalEdit}
            rowClicked={projectClicked}
            setRowClicked={setProjectClicked}
            totalHours={totalHours}
            totalOvertime={totalOvertime}
            totalPercentage={totalPercentage}
             />

            {openModalDelete && <ModalRed 
                CloseButtonClickHandler={() => setOpenModalDelete(false)}
                redButtonClickHandler={() => id ? deleteProjectWhenEditing() : deleteProjectWhenRegistering()}
                title="Inativar"
                message="Deseja realmente excluir projeto?"/>
            }
            {openModalEdit && <ModalEditAttachment
            CloseButtonClickHandler={() => {
                setOpenModalEdit(false)
            }}
            setWorkload={setHoursMonthEdit}
            workload={hoursMonthEdit}
            saveHandler={id ? editHoursWhenEditing : editHoursWhenRegistering}
            setOvertime={setOvertimeEdit}
            overtime={overtimeEdit}
            />
            }
        </AttachmentContainer>
    )
}

export default AttachmentProject;