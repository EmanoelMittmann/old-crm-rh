import styled from "styled-components";

export const ContainerStatusLabel = styled.div`
    display: flex;
    justify-content: start;
    justify-content: flex-start;
    width: 250px;
    height: 30px;
    font-weight: 700;
    background-color: ${props => props.buttonColor};
    color: ${props => props.textColor};
    border-radius: 40px;
`
