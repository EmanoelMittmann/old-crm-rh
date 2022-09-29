import styled from "styled-components"

export const ContainerWap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5em;

    &:last-child {
        margin-bottom: 1em;
    }
`

export const ContainerLabelProfessional = styled.div`
    width: 100%;
    max-width:52%;
    height:48px;
    background-color: #F4F6F8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 0 0.5em 0 1em;
    margin: -0.1em 0.5em 0.8em 1.2em ;

    svg{
        margin-left: 1em;
        cursor: pointer;

    }
`
export const ModalContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 28%;
    border-radius: 0 0 15px 15px;
    border-top: 1.5px solid #919EAB52;
    `

export const IconButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    margin-left: 18em;
svg {

    cursor: pointer;
}
`

export const TitleComissionProfessional = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 9em 1em 1em;

`