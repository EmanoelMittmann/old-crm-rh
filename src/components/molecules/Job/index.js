import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setJobList } from '../../../redux/actions'

import  JobOptions  from '../../atoms/icons/JobOptions'
import api from '../../../api/api'
import { JobNameContainer, JobName, JobNameOptionsContainer } from './style.js'
import JobActive from '../../atoms/JobActive'
import JovDisabled from '../../atoms/JobDisabled'

const Job = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const list = async () => {
        const {data} = await api({
            method:'get',
            url:'/job',
        }); 
        dispatch(setJobList(data))
        return data;
    }

    useEffect(() => {
        list() 
    }, []);


return (
    <div>
        {state.jobs.map(job => (
            <JobNameContainer>
                <JobName>{job.name}</JobName>
                <JobNameOptionsContainer>
                    {job.is_active ? <JobActive/> : <JovDisabled/>}
                    <JobOptions info={job}/>
                </JobNameOptionsContainer>
            </JobNameContainer>
        ))
        }
    </div>
)
}

export default Job;
