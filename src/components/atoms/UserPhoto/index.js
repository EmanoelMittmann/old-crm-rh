import React from 'react'
import { useSelector } from 'react-redux'
import {Photo} from '../UserPhoto/style'

const UserPhoto = () => {
    const photo = useSelector(state => state.authentication.googleData.profileObj.imageUrl)
    return (
        <Photo src={photo} alt="" />
    )
}

export default UserPhoto;