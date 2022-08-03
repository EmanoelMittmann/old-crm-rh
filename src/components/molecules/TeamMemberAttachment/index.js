import React, { useState } from 'react'
import User from '../../../assets/user.png'
import { BsThreeDots } from "react-icons/bs"
import { TeamMemberPic } from '../../atoms/TeamMemberPic/style.js'
import {TeamMemberDetails, Name, WorkLoad} from './style'

export const TeamMemberAttachment = ({data, project, openProjectTeamModal }) => {
  const [userDetailsIsVisible, setUserDetailsIsVisible] = useState(false)
  const [userDetailsInfo, setUserDetailsInfo] = useState({})
  const [projectInfo, setProjectInfo]= useState('')

  const menuPosition = (index, arr) => {
    let position = 46
    arr.map((menu, i) => {
      if(index > i){
       return position = position + 46
      }
      return position
    })
    return `${position}px`
  }

  const detailsOnMouseEnter = (projectId, userId, userWorkload) => {
    const project = data.find(project => {
      return project.id === projectId
    })

    const user = project?.users.find(user => {
      return userId === user.id
    })

    const fullName = user?.name.split(' ')
    let firstName
    let lastName
    if(fullName){
      firstName = fullName[0]
      lastName = fullName[fullName.length - 1]
    }

    setUserDetailsInfo({
      ...user, 
      name: `${firstName} ${lastName !== firstName ? lastName : ''}`,
      workload: userWorkload
    })
    setProjectInfo(project)
    setUserDetailsIsVisible(true)
  } 

  const detailsOnMouseLeave = (projectId, userId) => {
    setUserDetailsIsVisible(false)
  }

  return(
   <>
    { project.users.map((user, index)=> (
      index < 5 && (
        <TeamMemberPic 
            key={index}
            src={user?.avatar || User}
            size="35px"
            margin="0 0.7em 0 0"
            onMouseEnter={() => {
                detailsOnMouseEnter(project.id, user.id, user.workload || 0) 
            }}
            onMouseLeave={() =>
                detailsOnMouseLeave(project.id, user.id)
            }
        />
      )
    ))}
    { project.users.length > 4 &&
      <BsThreeDots
        color="black"
        size="1.4em"
        style={{cursor: 'pointer', margin: '0.7em'}}
        onClick={openProjectTeamModal}
      /> 
    }
    { project.users.map((user, index, arr) => {
      return user.id === userDetailsInfo?.id 
        && project.id === projectInfo?.id 
          && userDetailsIsVisible 
          && <TeamMemberDetails key={index} position={menuPosition(index, arr)}>
                <Name>
                    {userDetailsInfo.name}
                </Name>
                <WorkLoad>
                    {`${userDetailsInfo.workload} h/mês`}
                </WorkLoad>
            </TeamMemberDetails>    
      }) }
   </>
  )
} 