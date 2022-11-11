import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 25%;
    border-radius: 0 0 15px 15px;
    margin-top: 1.3em;
    border-top: 1.5px solid #919EAB52;
`

export const ContainerInputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1em;
    padding: 1em;
`
export const ProfessionalData = styled.div`
    width: 93%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${(props) => props.padding};
    background: #F2F5F8;
    align-items: center;
    margin-left:1em;
    border-radius:8px;
`
export const Img = styled.img`
    width: 40px;
    border-radius:20px;
`

export const DivHours = styled.div`
    gap:3em;
    padding: 0 0 0 3em;

`

export const ContainerInputsSelect = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1em;
`