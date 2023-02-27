import styled from "styled-components"

export const ContainerAbsolute = styled.div`
    display: flex;
    margin-top: 2em;
`

export const ContainerGeneral = styled.div`
  width: 91.5%;
`
export const ContainerCheckBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction :  'column'};
  height: 20%;
  margin-bottom: 1em';
  height: 210px;
  margin-bottom: 1em;
  margin-left:3em;
  gap: ${props => props.gap ? props.gap : '2em'};
`

export const ContainerCheckTitle = styled.div`
  width: 75%;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  height: 20%;
  margin-bottom: 1em;
  margin-left:1em;
`
export const ContainerCheckBoxDuo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left:3em;
  gap: 2em;
`

export const SelectsItens = styled.div`
  display:flex;
  white-space: nowrap;
  justify-content: ${(props) => props.content};
  padding-right: ${props => props.right};
  align-items: center;
  font-family: "Poppins", sans-serif;
  width: ${(props) => props.width};
  gap:0.5em;
  
  #box {
    margin-right: 10px !important;
    width: 1.2em !important;
    height: 1.2em !important;
   
    
  }
  #box:focus {
    outline: none;
  }
`;