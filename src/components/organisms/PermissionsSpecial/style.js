import styled from "styled-components"

export const ContainerAbsolute = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    height: 300px;
`

export const ContainerGeneral = styled.div`
  width: 60%;

`

export const ContainerCheckBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left:3em;
  gap: 2em;

`
export const ContainerCheckBoxDuo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left:3em;
  gap: 2em;

`

export const SelectsItens = styled.div`
  display: inline-flex;
  justify-content: ${(props) => props.content};
  white-space: nowrap;
  padding-right: ${props => props.right};
  align-items: center;
  font-family: "Poppins", sans-serif;
  width: ${(props) => props.width};
  margin: 0 2em 0 0;

  #box {
    margin-right: 10px !important;
    width: 1.2em !important;
    height: 1.2em !important;
  }
  #box:focus {
    outline: none;
  }
`;