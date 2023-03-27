import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import MaskedInput from 'react-text-mask'
import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style'
import {InputWithLabelContainer} from '../InputWithLabel/style'
import { ErrorMessage, Label, RequiredLabel } from '../DefautInputSelect/style.js'

const InputMasked = (
  { value, 
    label, 
    onChange, 
    width, 
    widthContainer, 
    justify, 
    padding, 
    error, 
    disabled,
    mask,
    handleBlur, 
    name,
    touched,
    required,
    placeHolder
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
              focus={focus || value == ''}
              blur={blur || value !== ''}
            >
              {label}
              {required && <RequiredLabel>*</RequiredLabel>}
            </Label>
            <DefaultInput
              type="text"
              width={width}
              disabled={disabled}
              padding="0.3em 0 0 1.5em"
              placeholder={placeHolder}
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

export default InputMasked