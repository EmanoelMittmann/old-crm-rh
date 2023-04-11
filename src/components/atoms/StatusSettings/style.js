import styled from "styled-components";

export const ContainerStatusLabel = styled.div`
    width: ${(props) => props.width ? props.width : '150px'};
    height: ${(props) => props.height ? props.height : '35px'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 700;
    background-color: ${props => props.buttonColor};
    color: ${props => props.textColor};
    border-radius: 40px;
`
