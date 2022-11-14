import styled from "styled-components";

export const AttachmentContainer = styled.div`
    border-top: 1.5px solid #919EAB52;
    padding: 3em 3em 2em 3em;
    margin-top: 1em;
`
export const AttachmentForm = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
`

export const AttachmentTableLine= styled.div`
    display: flex;
    width: 100%;
    min-height: 60px;
    border-bottom: 1.5px solid #EFF2F4;

    &:last-child{
        border-bottom: none;
    }
`

export const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 5em;
    padding-right: 1.5em;

    svg:hover {
        cursor: pointer;
    }
`

