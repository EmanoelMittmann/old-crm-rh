import React from 'react'
import {ReactComponent as CloseButtonIcon} from '../../../../assets/icons/close.svg'
import { CloseButtonContainer } from './style.js'

const CloseButton = ({onClick, CloseButtonClickHandler}) => {

    return(
        <CloseButtonContainer onClick={onClick || CloseButtonClickHandler()}>
            <CloseButtonIcon/>
        </CloseButtonContainer>
    )
}

export default CloseButton;
