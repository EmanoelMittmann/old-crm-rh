import React from 'react'
import {ReactComponent as CloseButtonIcon} from '../../../../assets/icons/close.svg'
import { CloseButtonContainer } from './style.js'

const CloseButton = ({CloseButtonClickHandler}) => {

    return(
        <CloseButtonContainer onClick={CloseButtonClickHandler}>
            <CloseButtonIcon/>
        </CloseButtonContainer>
    )
}

export default CloseButton;
