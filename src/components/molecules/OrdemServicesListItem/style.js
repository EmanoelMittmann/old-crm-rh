import styled from "styled-components";

export const ContainerOrdemServices = styled.div`
    display: flex;
    overflow-y: scroll;
    scroll-behavior: smooth;
`

export const OrdemServiceItens = styled.div`
    display: flex;
    align-items: center;
    width: ${ props => props.width};
    padding-left: ${props => props.left};
`