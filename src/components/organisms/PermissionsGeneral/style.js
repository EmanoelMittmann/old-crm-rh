import styled from "styled-components"

export const ContainerAbsolute = styled.div`
    margin-top: 2em;
    height: 250px;
`

export const ContainerGeneral = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;

`

export const ContainerCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
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