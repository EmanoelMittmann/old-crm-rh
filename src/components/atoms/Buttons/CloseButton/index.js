import React from 'react'
import {ReactComponent as CloseButtonIcon} from '../../../../assets/icons/close.svg'
import { CloseButtonContainer } from './style.js'

const CloseButton = ({onClick}) => {

    return(
        <CloseButtonContainer onClick={onClick}>
            <CloseButtonIcon/>
        </CloseButtonContainer>
    )
}

export default CloseButton;
