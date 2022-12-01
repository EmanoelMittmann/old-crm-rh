import styled from "styled-components";

export const ContainerTr = styled.tr`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    margin-top: 1em;
    height: 48px;
`

export const ValuesTd = styled.td`
    font-family: 'Poppins';
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: ${(props) => props.left};
    width: ${(props) => props.w};
`