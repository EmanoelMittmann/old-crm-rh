import styled, { keyframes } from "styled-components";


export const InputSelectContainer = styled.select`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  width: ${(props) => props.width};
  height: 40px;
  background-color: white;
  padding: 0.3em 2em 0 1em;
  outline: none;
  border: none;
  color:${(props) => props.textColor ? "#000" : "#acb4ba"};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-overflow: ellipsis;
`;


export const InputSelectOption = styled.option`
  height: 100px;
  color: #000;
  border: none;
  font-size: 1rem;
  font-weight: 500;
`;

export const Img = styled.img`
    right: 20px;
    top: 18px;
    position: absolute;
    width: 13px;
`
export const InputSelectOptionPlaceholder = styled.option`
    display: none;
    font-size: 1rem;
    font-weight: 500;

`;

export const Father = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
`


const fadeDown = keyframes`
    0%{
        opacity: 0;
        top: 0px;
    }
    100% {
        opacity: 1;
        top: -10px;
    }
`

const fadeUp = keyframes`
    0%{
        opacity: 0.5;
        top: -10px;
    }
    100% {
        opacity: 0;
        top: 10px;
    }
`

export const Label = styled.span`
    display: inline-block;
    padding: 0 0.3em;
    position: absolute;
    font-size: 0.8rem;
    color: #454F5B;
    font-weight: 600;
    background: white;
    top: -10px;
    left: 20px;
    animation: ${props => props.focus ? fadeDown : props.blur ? fadeUp : ''} 0.3s ease-in-out;
    opacity: ${props => props.focus ? 1 : 0};
`
export const ErrorMessage = styled.span`
    padding-left: 1em;
    color: #454F5B;
    font-size: 12px;
    height: 14px;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    color: #ff4842;
`
export const RequiredLabel = styled.span`
    color: red;
`