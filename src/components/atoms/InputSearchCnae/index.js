import axios from 'axios'
import React from 'react'
import { BlueButton } from '../Buttons/BlueButton/style.js'
import { InputSearchWithLabel, DefaultInputCnae} from './style.js'

const InputSearchCnae = ({inputWidth, placeholder, onChange}) => {

  return (
    <InputSearchWithLabel>
        <DefaultInputCnae
            onChange={onChange}
            type="search"
            placeholder={placeholder}
            width={inputWidth}
            padding="0.3em 0 0 1em"
        />
    </InputSearchWithLabel>
  )
}

export default InputSearchCnae 
