import React from 'react'
import { useState } from 'react'
import { BlueButton } from '../../atoms/Buttons/BlueButton/style'
import InputSearchCnae from '../../atoms/InputSearchCnae'

const InputWithButton = ({placeholder}) => {

  return (
    <div style={{display:'flex', width:'100%'}}>
        <InputSearchCnae 
            placeholder={placeholder} 
            inputWidth={"95%"} 
        />
        <BlueButton width={"20%"}>Adicionar</BlueButton>
    </div>
  )
}

export default InputWithButton