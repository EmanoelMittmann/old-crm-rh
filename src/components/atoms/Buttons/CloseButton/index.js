import React from 'react'
import {ReactComponent as CloseButtonIcon} from '../../../../assets/icons/close.svg'
import { CloseButtonContainer } from './style.js'
import { closeModal } from '../../../../redux/actions'

const CloseButton = ({CloseButtonClickHandler}) => {

    return(
        <CloseButtonContainer onClick={CloseButtonClickHandler}>
            <CloseButtonIcon/>
        </CloseButtonContainer>
    )
}

export default CloseButton;
