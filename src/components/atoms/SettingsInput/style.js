import styled from 'styled-components';

export const Input = styled.input`
    font-size: 1rem;
    font-weight: 600;
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
`

export const InputLine = styled.div`
    position: relative;
    display: flex;
    justify-content:space-between;
    width: ${props => props.width};
    height: 45px;
    border: 1.5px solid #919EAB52;
    border-radius: 8px;
`