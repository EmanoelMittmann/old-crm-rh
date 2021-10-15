import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setJobList, setStatusList, setProjectTypeList, settingsPages} from '../../../redux/actions'

import Options from '../../atoms/icons/Options'
import api from '../../../api/api'
import { JobNameContainer, JobName, JobNameOptionsContainer } from './style.js'
import StatusActive from '../../atoms/StatusActive'
import StatusDisabled from '../../atoms/StatusDisabled'
import { useLocation } from 'react-router'

const SettingsListItem = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()

    const getSettingsList = async () => {
        const {data} = await api({
            method:'get',     
            url:`${location.pathname}`,
        }); 
    
        if(location.pathname === "/job") dispatch(setJobList(data.data));
        if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
        if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
        dispatch(settingsPages(data.meta));
    
        return data;
    }

    useEffect(() => {
        getSettingsList()
    }, []);


return (
    <div>
        {location.pathname === "/job" &&
        
            state.jobs.map(job => (
                <JobNameContainer>
                    <JobName>{job.name}</JobName>
                    <JobNameOptionsContainer>
                        {job.is_active ? <StatusActive/> : <StatusDisabled/>}
                        <Options info={job}/>
                    </JobNameOptionsContainer>
                </JobNameContainer>
            )) 
        }
        {location.pathname === "/projectStatus" && 
            state.status.map(job => (
                <JobNameContainer>
                    <JobName>{job.name}</JobName>
                    <JobNameOptionsContainer>
                        {job.is_active ? <StatusActive/> : <StatusDisabled/>}
                        <Options info={job}/>
                    </JobNameOptionsContainer>
                </JobNameContainer>
            )) 
        }
        {location.pathname === "/projectType" && 
            state.projectType.map(project => (
                <JobNameContainer>
                    <JobName>{project.name}</JobName>
                    <JobNameOptionsContainer>
                        {project.is_active ? <StatusActive/> : <StatusDisabled/>}
                        <Options info={project}/>
                    </JobNameOptionsContainer>
                </JobNameContainer>
            )) 
        }
        
    </div>
)
}

export default SettingsListItem;