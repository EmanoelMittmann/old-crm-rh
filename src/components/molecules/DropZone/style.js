import styled, { css } from "styled-components"

export const DropContainer = styled.div`
  height: 250px;
  background: #F4F6F8;
  border-radius: 8px;
  border: 2px dashed;
  border-color: #919EAB52;

  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}
  

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em 5em;
  justify-content: center;
  margin: 1.5em 5em 4em;
`

const dragActive = css`
  border-color: #2680EB;
`

const dragReject = css`
  border-color: #CF0418;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column; 
  margin-left: 4em;
`

export const Span = styled.span`
  cursor: pointer;  
`

export const Message = styled.h3`
`

export const Text = styled.h4`
  color: #647482;
  font-weight: 500;

  span {
    color: #2680EB;
    font-weight: 600;
  }
`