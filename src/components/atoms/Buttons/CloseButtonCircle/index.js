import React from 'react'
import {ReactComponent as CloseButtonCircleIcon} from '../../../../assets/icons/closeCircle.svg'
import { CloseButtonContainer } from './style.js'

const CloseButton = ({onClick}) => {

    return(
        <CloseButtonContainer onClick={onClick}>
            <CloseButtonCircleIcon />
        </CloseButtonContainer>
    )
}

export default CloseButton;
