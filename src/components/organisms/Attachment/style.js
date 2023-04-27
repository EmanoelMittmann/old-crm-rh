import styled from "styled-components";

export const AttachmentContainer = styled.div`
    border-top: 1.5px solid #919EAB52;
    padding: 3em 3em 2em 3em;
    margin-top: 1em;
`
export const AttachmentForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
`

export const AttachmentTableLine = styled.div`
  display: grid;
  width: 100%;
  min-height: 50px;
  margin-top: 0.5em;
  align-items: center;
  text-align: left;
  padding: 1em;
  grid-template-columns:2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    &:hover{
        background-color:#f4f6f8;
        border-bottom: 1.5px solid #EFF2F4;
    }

    &:last-child{
        border-bottom: none;
    }
`

export const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg:hover {
        cursor: pointer;
    }
`

