import styled from "styled-components";

export const ContainerStatusLabel = styled.div`
    width: 150px;
    height: 30px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 700;
    background-color: ${props => props.buttonColor};
    color: ${props => props.textColor};
    border-radius: 40px;
`
