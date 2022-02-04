import styled from 'styled-components';

export const DefaultInput = styled.input`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: ${props => props.width ? props.width : "100%"};
    height: 40px;
    padding: ${props => props.padding};
    outline: none;
    border:none;
    color: black;
    border-radius: 8px;

    &::placeholder {
        color: ${props => props.placeholderColor ? props.placeholderColor : "#919EAB"};
        opacity: 0.7;
        text-align: ${props => props.placeholderPosition ? props.placeholderPosition : "left"};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
     
     &::-webkit-datetime-edit, &::-webkit-inner-spin-button, &::-webkit-clear-button {
        display: ${props => props.displayDate};
        position: absolute;
        left: 70px;
        top: 9px;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
}
`

export const InputLine = styled.div`
    position: relative;
    display: flex;
    justify-content:space-between;
    width: ${props => props.width};
    height: 45px;
    border: ${props => `1.5px solid ${props.error ? "#ff4842" : "#919EAB52"}`};
    border-radius: 8px;
    margin: ${props => props.margin};
`