import styled from "styled-components"

export const ContainerWap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5em;
    position: relative;


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
export const ModalContainerProfessional = styled.div` 
    right:100%;
    top:0;
    width: 520px;
    height: 540px;
    position: absolute;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
    z-index: 10;
`

export const ModalContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    border-radius: 0 0 15px 15px;
    border-top: 1px solid #CCD1D6;
    padding: 24px 33px ;
    gap: 20px;
    
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

export const ContainerAbsolute = styled.div`
  height: 405px;


`