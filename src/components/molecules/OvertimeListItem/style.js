import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    align-items: center;

    &:hover{
    background-color:#f4f6f8;
  }
`

export const ContainerCodigo = styled.div`
    display: flex;
    width: 5%;
    padding-left: 3.3em;

`
export const ContainerDataIntial = styled.div`
    display: flex;
     width: 16.5%;
     padding-left: 7em;

`
export const ContainerDataFinal = styled.div`
    display: flex;
     width: 15%;
     padding-left:5em;
`

export const ContainerQntHours = styled.div`
    display: flex;
    width: 17%;
    padding-left: 3em;

`
export const ContainerProject = styled.div`
    display: flex;
    width: 15%;
    padding-left: 3em;

`
export const StatusHoursExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 235px;
  height: 30px;
  background-color:${props => props.bg};
  color:${props => props.text};
  border-radius: 40px;
  font-weight: 700;
  padding-left: 1em;
  padding-right: 1em;
`

export const ContainerIconOptions = styled.div`
  padding: 1em;
  cursor: pointer;
  @media (max-width: 1030px) {
    padding: -6em;

`
export const ContainerDataLancament = styled.div`
    display: flex;
     padding-left: 11em;
      padding-right: 3em;

`
export const HoursListOptions = styled.div`
 display: flex;
 align-items:center;
  position:absolute;
  left: 85%;


  svg {
    fill: ${(props) => props.optionsColor};

  }
`;

export const ContainerIcon = styled.div`
  cursor: pointer;
  @media (max-width: 1030px) {
    padding: -6em;
  }

`