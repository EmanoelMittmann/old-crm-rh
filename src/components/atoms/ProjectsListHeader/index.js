import React,{ useState} from 'react'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import api from '../../../api/api'
import {
    ListHeaderProjeto,
    ListHeaderType,
    ListHeaderBeginning,
    ListHeaderTime,
    ListHeaderStatus
} from './style.js'

import { 
    setFilterOrderProjects, 
    projectsPages, 
    setProjectList 
}from '../../../redux/actions/index.js'

import { ListHeaderContainer, ListHeaderTitle } from '../ListHeader/style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const ProjectsListHeader = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [isAsc, setIsAsc] = useState(true)


    const orderProjectsList = async () => {
      //  const isActive = state.filterStatus
        const paramsOrder = isAsc ? 'asc' : 'desc'

        setIsAsc(!isAsc)

        const {data} = await api({
            method:'get',     
            url:`/project`,
            params: {
                page: 1,
                orderField: 'name',
                order: paramsOrder,
                search: state.projectsSearchFilter,
            }
        }); 

        dispatch(setFilterOrderProjects(paramsOrder))
        dispatch(setProjectList(data.data));
        dispatch(projectsPages(data.meta));


        return data;
    }

    return (
        <ListHeaderContainer>

            <ListHeaderProjeto>
                <ListHeaderTitle onCLick={()=> orderProjectsList()}>Projeto</ListHeaderTitle>
                <Arrows onClick={() => orderProjectsList()}/>
            </ListHeaderProjeto>

            <ListHeaderType>
                <ListHeaderTitle>Tipo</ListHeaderTitle>
            </ListHeaderType>

            <ListHeaderBeginning>
                <ListHeaderTitle onCLick={()=> orderProjectsList()}>Início</ListHeaderTitle>
                <Arrows onClick={() => orderProjectsList()}/>
            </ListHeaderBeginning>

            <ListHeaderTime>
                <ListHeaderTitle margin="0">Time</ListHeaderTitle>
            </ListHeaderTime>

            <ListHeaderStatus>
                <ListHeaderTitle>Status</ListHeaderTitle>
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ProjectsListHeader;