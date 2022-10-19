import styled from "styled-components";

export const ContainerOrdemServices = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  padding-bottom: 1.5em;

`;

export const OrdemServiceItens = styled.div`
  display: inline-flex;
  justify-content: ${(props) => props.content};
  white-space: nowrap;
  padding-right: ${props => props.right};
  align-items: center;
  font-family: "Poppins", sans-serif;
  width: ${(props) => props.width};

  #box {
    margin-right: 10px !important;
    width: 1.2em !important;
    height: 1.2em !important;
  }
  #box:focus {
    outline: none;
  }
`;