import React from 'react'
import {ContainerProfileInfo} from './style'
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification.svg'
import UserPhoto from '../../../components/atoms/UserPhoto'

const ProfileInfo = () => {
    return (
        <ContainerProfileInfo>
            <NotificationIcon/>
            <UserPhoto/>
        </ContainerProfileInfo>
    )
}

export default ProfileInfo;