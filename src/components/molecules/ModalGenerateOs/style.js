import styled from "styled-components"

export const ContainerWap = styled.div`
    display: flex;
    align-items: center;
`

export const ContainerLabelProfessional = styled.div`
    width: 23em;
    height:48px;
    background-color: #F2F5F8 ;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 0 0.5em 0 1em;
    margin: 1px -2px 7px 16px;

    svg{
        margin-left: 1em;
        cursor: pointer;

    }
`
export const ModalContainerProfessional = styled.div`
  position: absolute;
  left: 32.5%;
  top: 10;
  width: 37.5em;
  height: 36em;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;

  .container {
    height: 80%;
  }
`;

export const ModalContainerButtons = styled.div`
    display: flex;
    margin-top: 4em;
    justify-content: flex-end;
    width: 100%;
    border-radius: 0 0 15px 15px;
    border-top: 1px solid #CCD1D6;
    padding: 1.2em 2.5em;
    gap: 1em;
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
  height: 395px;

  .shelf{
    width: 90%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`
