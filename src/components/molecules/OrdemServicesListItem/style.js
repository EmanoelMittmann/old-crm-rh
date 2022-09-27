import styled from "styled-components";


export const ContainerOrdemServices = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

export const OrdemServiceItens = styled.div`
  display: inline-flex;
  justify-content: ${(props) => props.content};
  white-space: nowrap;
  align-items: center;
  font-family: "Roboto", sans-serif;
  width: ${(props) => props.width};
  padding-right: ${(props) => props.right};

  #box{
    margin-right: 10px;
    width: 1.2em;
    height: 1.2em;
    }
  #box:focus{
    outline: none;
  }

`;
