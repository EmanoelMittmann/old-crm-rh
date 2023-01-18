import styled from "styled-components";

export const InputSelectContainer = styled.select`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: ${props => props.width};
    background-color: white;
    height: 40px;
    padding: 0.3em 2em 0 1em;
    outline: none;
    border:none;
    color: rgba(145, 158, 171, 0.67);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-overflow: ellipsis;

`

export const InputSelectOption = styled.option`
    color: black;
    height: 100px;
    border: none;
    font-size: 1rem;
    font-weight: 500;

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
