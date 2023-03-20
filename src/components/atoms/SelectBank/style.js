import styled, { keyframes } from "styled-components";

export const InputSelectContainer = styled.select`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: ${props => props.width};
    height: 40px;
    padding: 0.3em 2em 0 1em;
    outline: none;
    border:none;
    color: rgba(145, 158, 171, 0.67);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-overflow: ellipsis;
    background-color: white;
`

export const InputSelectOption = styled.option`
    color: black;
    height: 100px;
    border: none;
    font-size: 1rem;
    font-weight: 500;
`

export const Container = styled.div`
    width: 34em;
    overflow-y: scroll;
    overflow-x: none;
    height: 10em;
    transform: translate(22.2em,3em);
    position: absolute;
    border-radius: 8px;
    border: 1px solid #ccc;
    z-index: 10;
    background-color: white;
    position: absolute;
    ::-webkit-scrollbar{
        background-color: #ccc;
        width: 10px;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-button{
        display: none;
    }
`

export const InputSelectOptionPlaceholder = styled.option`
    color: white;
    display: none;
    font-size: 1rem;
    font-weight: 500;
`
export const Img = styled.img`
    right: 20px;
    top: 18px;
    position: absolute;
    width: 13px; 
`

export const RequiredLabel = styled.span`
    color: red;
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

export const InputDynamic = styled.div`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: ${props => props.width};
    height: 45px;
    border-radius: 8px;
    border: 1px solid rgba(145, 158, 171, 0.67);
    color: rgba(145, 158, 171, 0.67);
    text-overflow: ellipsis;
    background-color: white;
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