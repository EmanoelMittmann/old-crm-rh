import styled from "styled-components";

export const ContainerProfessionalsListItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;
`
export const Professionalnfo = styled.div`
    display: flex;
    width: 20%;
    padding-left: 5em;
`

export const ProfessionalProfile = styled.div`
    display: flex;
    align-items: center;
    width: 18%;
    padding-left: 1em;
`


export const ProfessionalEmail = styled.div`
    display: flex;
    width: 25%;
    padding-left: 5em;
`

export const ProfessionalPhoneNumber = styled.div`
    display: flex;
    width: 15%;
    padding-left: 5em;
`
///////////////////////

export const ProfessionalsListOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 2%;

    svg {
        fill: ${props => props.optionsColor};
    }
`

export const ContainerIconOptions = styled.div`
    padding: 1em;
    cursor: pointer;
`
