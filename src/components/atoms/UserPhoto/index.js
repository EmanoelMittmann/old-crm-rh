import React from 'react'
import {Photo} from '../UserPhoto/style'

const UserPhoto = ({photo}) => {
    return <Photo src={photo} alt="Avatar" />
}

export default UserPhoto