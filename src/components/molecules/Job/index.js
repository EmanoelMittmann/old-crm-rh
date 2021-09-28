import React from 'react'
import { ContainerJobName, JobName } from './style.js'
import JobActive from '../../atoms/JobActive'
import JovDisabled from '../../atoms/JobDisabled'

const Job = () => {
    return (
        <ContainerJobName>
            <JobName>Lider técnico</JobName>
            <JovDisabled/>
        </ContainerJobName>
    )
}

export default Job;
