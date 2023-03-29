import styled from "styled-components";

export const ContainerOrdemServices = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1em;
  height: 50px;
`;

export const OrdemServiceItens = styled.div`
  display: inline-flex;
  justify-content: ${(props) => props.content};
  white-space: nowrap;
  align-items: center;
  font-family: "Poppins", sans-serif;
  width: ${(props) => props.width};

  #box {
    margin-right: 6px;
    width: 1.2em;
    height: 1.2em;
  }
  #box:focus {
    outline: none;
  }
`;
export const ContainerSelect = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`