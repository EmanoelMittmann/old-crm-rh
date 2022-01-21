import React from 'react'
import {ContainerProfileInfo} from './style'
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification.svg'
import UserPhoto from '../../../components/atoms/UserPhoto'

const ProfileInfo = ({photo}) => {
    return (
        <ContainerProfileInfo>
            <NotificationIcon/>
            <UserPhoto photo={photo}/>
        </ContainerProfileInfo>
    )
}

export default ProfileInfo;