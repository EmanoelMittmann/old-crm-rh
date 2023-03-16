import styled, { keyframes } from "styled-components";

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