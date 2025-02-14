import styled from "styled-components";

export const BlueButton = styled.button`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9em;
    font-weight: 600;
    width: ${props => props.width};
    height: ${props => props.height ? props.height : "45px"};
    background-color: #407BFF;
    box-shadow: 0px 8px 16px #0000003D;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    color: #FFFFFF;
    border: none;

    &:hover {
        cursor: pointer;
    }
`