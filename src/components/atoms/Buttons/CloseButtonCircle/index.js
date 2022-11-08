import React from 'react'
import {ReactComponent as CloseButtonCircleIcon} from '../../../../assets/icons/closeCircle.svg'
import { CloseButtonContainer } from './style.js'

const CloseButton = ({CloseButtonClickHandler}) => {

    return(
        <CloseButtonContainer onClick={CloseButtonClickHandler}>
            <CloseButtonCircleIcon />
        </CloseButtonContainer>
    )
}

export default CloseButton;
