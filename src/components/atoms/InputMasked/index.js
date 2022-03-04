import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import MaskedInput from 'react-text-mask'

import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style'
import {InputWithLabelContainer, Label, ErrorMessage} from '../InputWithLabel/style'

const InputWithLabel = (
  { value, 
    label, 
    onChange, 
    width, 
    widthContainer, 
    justify, 
    padding, 
    error, 
    mask,
    handleBlur, 
    name,
    touched
  }) => {
  const [focus, setFocus] = useState(false)
  const [blur, setBlur] = useState(false)
  const inputRef = useRef(null)

  return(
    <MaskedInput
      value={value}
      mask={mask}
      onFocus={() => setFocus(true) & setBlur(false)}
      onBlur={() =>  setBlur(true) & setFocus(false) & handleBlur(name, true)}
      onChange={onChange}
      keepCharPositions={true}
      guide={false}
      render={(maskRef, maskProps) => (
        <InputWithLabelContainer 
          padding={padding} 
          justify={justify} 
          widthContainer={widthContainer}
        >
          <InputLine width={width} error={error && touched}>
            <Label
              focus={focus || value !== ''}
              blur={blur || value !== ''}
            >
              {label}
            </Label>
            <DefaultInput
              type="text"
              placeholder={focus ? '' : label}
              width={width}
              padding="0.3em 0 0 1.5em"
              ref={
                node => {
                  if(node){
                    maskRef(node);
                    inputRef.current = node;
                  }}}
              {...maskProps}
            />
          </InputLine>
          {error && touched && (<ErrorMessage visible={error}>{error}</ErrorMessage>)}
      </InputWithLabelContainer>
      )} 
    />
  )
}

export default InputWithLabel