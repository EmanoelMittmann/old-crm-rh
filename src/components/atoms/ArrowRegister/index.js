import React from 'react'

import { ContainerArrow,Img } from './style.js'
import ArrowBack from '../../../assets/icons/arrow-back.svg'

const ArrowRegister = ({clickHandler}) => {
    return (
        <ContainerArrow onClick={() => clickHandler()}>
            <Img src={ArrowBack} alt="Voltar"/>
        </ContainerArrow>
    )
}

export default ArrowRegister;