import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useHistory } from 'react-router'
import { setJobList, setStatusList, setProjectTypeList, settingsPages} from '../../../redux/actions'

import Options from '../../atoms/icons/Options'
import api from '../../../api/api'
import { ListItemContainer, ListItemName, ListItemDetails } from './style.js'
import StatusActive from '../../atoms/StatusActive'
import StatusDisabled from '../../atoms/StatusDisabled'
import StatusLabel from '../../atoms/StatusLabel'

const SettingsListItem = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const getSettingsList = async () => {

        try{
            const {data} = await api({
                method:'get',     
                url:`${location.pathname}`,
            }); 
        
            if(location.pathname === "/job") dispatch(setJobList(data.data));
            if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
            if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
            dispatch(settingsPages(data.meta));

        }catch(err){
            if(err.request.status === 401){
                history.push("/");
            }
        }
    
    }

    useEffect(() => {
        getSettingsList()
    }, []);


return (
    <div>
        {location.pathname === "/job" &&
        
            state.jobs.map(job => (
                <ListItemContainer>
                    <ListItemName>{job.name}</ListItemName>
                    <ListItemDetails>
                        {job.is_active ? <StatusActive/> : <StatusDisabled/>}
                        <Options info={job}/>
                    </ListItemDetails>
                </ListItemContainer>
            )) 
        }
        {location.pathname === "/projectStatus" && 
            state.status.map(status => (
                <ListItemContainer>
                    <ListItemName>{status.name}</ListItemName>
                    <ListItemDetails>
                        {status.is_active ? <StatusActive/> : <StatusDisabled/>}
                        <Options info={status}/>
                    </ListItemDetails>
                </ListItemContainer>
            )) 
        }
        {location.pathname === "/projectType" && 
            state.projectType.map(project => (
                <ListItemContainer>
                    <ListItemName>{project.name}</ListItemName>
                    <ListItemDetails>
                        {project.is_active ? <StatusActive/> : <StatusDisabled/>}
                        <Options info={project}/>
                    </ListItemDetails>
                </ListItemContainer>
            )) 
        }
        
    </div>
)
}

export default SettingsListItem;