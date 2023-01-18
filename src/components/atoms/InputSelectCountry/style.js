import styled from 'styled-components'

export const InputSelectContainer = styled.select`
    appearance: none;
    border:none;
    color: rgba(145, 158, 171, 0.67);
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    height: 40px;
    outline: none;
    -moz-appearance: none;
    background-color: white;
    padding: 0.3em 2em 0 1em;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    width: ${props => props.width};
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
