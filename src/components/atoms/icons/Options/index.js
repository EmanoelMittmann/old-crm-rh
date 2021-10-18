import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import api from '../../../../api/api.js'
import {
    jobOptionClicked,
    statusOptionClicked,
    projectTypeOptionClicked,
    setJobList,
    setStatusList,
    setProjectTypeList,
    openModal,
    modalEditOpen,
    editJobClicked,
    editStatusClicked,
    editProjectTypeClicked
} from '../../../../redux/actions/index.js'
import { OptionsContainer, OptionsMenu, OptionsMenuItem } from './style.js'
import {
    ReactComponent as OptionsIcon
  } from '../../../../assets/icons/options.svg'



const Options = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const location = useLocation()

    const JobOptionClickHandler = (e) => {
    
        if(location.pathname === "/job") {
            dispatch(jobOptionClicked(props.info.id))
        }
        if(location.pathname === "/projectStatus") {
            dispatch(statusOptionClicked(props.info.id))
        }
        if(location.pathname === "/projectType") {
            dispatch(projectTypeOptionClicked(props.info.id))
        }
    }

    const JobOptionEditButtonClickHandler = () => {
        
        if(location.pathname === "/job") {
            dispatch(editJobClicked(props.info.id)) 
        }
        if(location.pathname === "/projectStatus") {
            dispatch(editStatusClicked(props.info.id))
        }
        if(location.pathname === "/projectType") {
            dispatch(editProjectTypeClicked(props.info.id))
        }

            dispatch(modalEditOpen())
            dispatch(openModal())
    }
    
    const isActive = state.filterStatus

    let params;

    if(state.filterOrder === ""){
        params = {
            page: `${state.settingsPagesFilter.current_page}`,
            is_active: isActive,
            search: state.settingsSearchFilter,
        }
    }

    if(state.filterOrder !== ""){
        params = {
            page: `${state.settingsPagesFilter.current_page}`,
            is_active: isActive,
            search: state.settingsSearchFilter,
            orderField: 'name',
            order: state.filterOrder,
        }
    }

    const JobOptionToggleStatusHandler = () => {
        
            const updateStatusJob = async () => {
                try {
                    await api({
                        method: 'put',
                        url: `/updateJobStatus`,
                        data: {
                            id: props.info.id
                        }
                    });

                    const {data} = await api({
                        method: 'get',
                        url: '/job',
                        params: params
                    });

                    dispatch(setJobList(data.data))
                    
                  } catch (error) {
                    console.error(error);
                  }
            }

            const updateProjectStatus = async () => {
                try {
                    await api({
                        method: 'put',
                        url: `/updateProjectStatus`,
                        data: {
                            id: props.info.id
                        }
                    });

                    const {data} = await api({
                        method: 'get',
                        url: '/projectStatus',
                        params: params
                    });

                    dispatch(setStatusList(data.data))
                    
                  } catch (error) {
                    console.error(error);
                  }
            }

            const updateStatusProjectType = async () => {
                try {
                    await api({
                        method: 'put',
                        url: `/updateProjectType`,
                        data: {
                            id: props.info.id
                        }
                    });

                    const {data} = await api({
                        method: 'get',
                        url: '/projectType',
                        params: params
                    });

                    dispatch(setProjectTypeList(data.data))
                    
                  } catch (error) {
                    console.error(error);
                  }
            }

            
            if(location.pathname === "/job") {
                updateStatusJob()
            }
            if(location.pathname === "/projectStatus") {
                updateProjectStatus();
            }
            if(location.pathname === "/projectType") {
                updateStatusProjectType()
            }
    }

    return(
        <div>
            <OptionsContainer 
            onClick={(e) => JobOptionClickHandler(e)}
            color={props.info.clicked ? "#407BFF" : "#B7BDC2"}>
                <OptionsIcon/>
                {props.info.clicked && 
                    <OptionsMenu>

                        <OptionsMenuItem 
                        onClick={() => JobOptionEditButtonClickHandler()}
                        >
                            Editar
                        </OptionsMenuItem>

                        <OptionsMenuItem 
                        onClick={() => JobOptionToggleStatusHandler()}
                        >
                        {props.info.is_active ? "Desativar" : "Ativar"}
                        </OptionsMenuItem>

                    </OptionsMenu>
                }
            </OptionsContainer>
        </div>
    )
}

export default Options;


