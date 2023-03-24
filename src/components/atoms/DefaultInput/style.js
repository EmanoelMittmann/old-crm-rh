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
        color: ${props => props.placeholderColor ? props.placeholderColor : "#acb4ba"};
        opacity: 0.7;
        text-align: ${props => props.placeholderPosition ? props.placeholderPosition : "left"};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
    
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,  
    &::-webkit-datetime-edit-day-field,  
    &::-webkit-datetime-edit-year-field {
        color: #919EAB;
    }  

    &::-webkit-datetime-edit, &::-webkit-inner-spin-button, &::-webkit-clear-button {
        display: ${props => props.displayDate};
        position: absolute;
        left: 50px;
        top: 9px;
    }

    ::-webkit-calendar-picker-indicator {
        margin-left: -1em;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
}
`
export const Father = styled.div`
    display: flex;
    width: ${props => props.width};
    flex-direction: column;
    white-space: nowrap;
`
export const ErrorMessage = styled.p`
    color:red;
    padding-left: 1.5em;
    font-size: 0.7em;
`

export const InputLine = styled.div`
    position: relative;
    display: flex;
    justify-content:space-between;
    width: ${props => props.width};
    height: 45px;
    border: ${props => props.border ? props.border : `1.5px solid ${props.error ? "#ff4842" : "#919EAB52"}`};
    border-radius: 8px;
    margin: ${props => props.margin};
`