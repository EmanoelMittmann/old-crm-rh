import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
`

export const ContainerCodigo = styled.div`
    display: flex;
    width: 180px;
    padding-right:8em;
    padding-left: 3.3em;
      position: relative;

`
export const ContainerDataIntial = styled.div`
    display: flex;
     width: 180px;
     padding-left: 7em;
       position: relative;

`
export const ContainerDataFinal = styled.div`
    display: flex;
     width: 180px;
     padding-left: 12.5em;
       position: relative;

`
export const ContainerProject = styled.div`
    display: flex;
      position: absolute;
     padding-left: 15.5em;
     padding-right: 15em;
     position: relative;

`
export const StatusHoursExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 30px;
  background-color:${props => props.bg};
  color:${props => props.text};
  border-radius: 40px;
  font-weight: 700;
  padding-left: 1em;
`

export const ContainerIconOptions = styled.div`
  padding: 1em;
  cursor: pointer;
  @media (max-width: 1030px) {
    padding: -6em;
  }
`;

export const HoursListOptions = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 85%;

  svg {
    fill: ${(props) => props.optionsColor};
  }
`;

