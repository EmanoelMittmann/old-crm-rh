import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import api from '../../../../api/api.js'
import { jobOptionClicked, setJobList, openModal, modalEditOpen, editJobClicked } from '../../../../redux/actions/index.js'
import { JobOptionsContainer, JobOptionsMenu, JobOptionsMenuItem } from './style.js'
import {
    ReactComponent as Options
  } from '../../../../assets/icons/options.svg'



const JobOptions = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const JobOptionClickHandler = (e) => {
        dispatch(jobOptionClicked(props.info.id))
    }

    const JobOptionEditButtonClickHandler = () => {
            dispatch(editJobClicked(props.info.id))

            dispatch(modalEditOpen())
            dispatch(openModal())
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
                    });

                    dispatch(setJobList(data))
                    
                  } catch (error) {
                    console.error(error);
                  }
            }

            updateStatusJob()
    }

    return(
        <div>
            <JobOptionsContainer 
            onClick={(e) => JobOptionClickHandler(e)}
            color={props.info.clicked ? "#407BFF" : "#B7BDC2"}>
                <Options/>
                {props.info.clicked && 
                    <JobOptionsMenu>

                        <JobOptionsMenuItem 
                        onClick={() => JobOptionEditButtonClickHandler()}
                        >
                            Editar
                        </JobOptionsMenuItem>

                        <JobOptionsMenuItem 
                        onClick={() => JobOptionToggleStatusHandler()}
                        >
                        {props.info.is_active ? "Desativar" : "Ativar"}
                        </JobOptionsMenuItem>

                    </JobOptionsMenu>
                }
            </JobOptionsContainer>
        </div>
    )
}

export default JobOptions


