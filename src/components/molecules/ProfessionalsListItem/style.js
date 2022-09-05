import styled from "styled-components";

export const ContainerProfessionalsListItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;

    @media(max-width: 1030px){
        width: 90%;
    }
`
export const Professionalnfo = styled.div`
    display: flex;
    width: 20%;
    padding-left: 5em;

`

export const ProfessionalStatus = styled.div`
    display: flex;
    width: 15%;
    padding-left: 4.5em;

    @media(max-width: 1030px){
        width: 10%;
        padding-left: 3.5em;
    }
`

export const Badge = styled.div`
    min-width: 30px;
    padding: 0 .8em;
    border-radius: 7px;
    text-align: center;
    font-size: .9rem;
    font-weight: 500;
    background-color: ${props => props.bg};
    color: ${props => props.color};

    @media(max-width: 1030px){
        min-width: 70px;
        margin-right:15px;
    }
    
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

    @media(max-width: 1030px){
        width: 23%;
        padding-left: 3em;
    }
`

export const ProfessionalPhoneNumber = styled.div`
    display: flex;
    width: 15%;
    padding-left: 5em;

    @media(max-width: 1030px){
        font-size: 16px;
        padding-left: 3em;
    }
`

export const ProfessionalsListOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 2%;

    @media(max-width:1030px){
        margin-left: 50px;
        width: 100%;
    }

    svg {
        fill: ${props => props.optionsColor};
    }
`

export const ContainerIconOptions = styled.div`
    padding: 1em;
    cursor: pointer;
    @media(max-width: 1030px){
        padding: -6em;
    }
`
