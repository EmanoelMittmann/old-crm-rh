import styled from 'styled-components';

export const DefaultInput = styled.input`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: ${props => props.width};
    height: 40px;
    padding: ${props => props.padding};
    outline: none;
    border:none;
    color: black;

    &::placeholder {
        color: #919EAB;
        opacity: 0.7;
    }

    /* &::-webkit-calendar-picker-indicator {
        width: 40px;
    } */
     
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
    border: 1.5px solid #919EAB52;
    border-radius: 8px;
    margin: ${props => props.margin};
`