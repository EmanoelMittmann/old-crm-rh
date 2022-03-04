import styled from "styled-components";

export const ContainerRegisterProfessionalsData = styled.div`
    padding: 0 3em 0 3em;
`

export const RegisterProfessionalsForm = styled.form`
   display: flex;
   flex-direction: column;

`
export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5em;

    &:last-child {
        margin-bottom: 3em;
    }
`