import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 100%;
    height: 40px;
    background-color: #F4F6F8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 2em;
    justify-content: space-between;


    svg{
        margin-left: 1em;
        cursor: pointer;
    }
`

export const ListHeaderItem = styled.div`
  display: flex;
  align-items: center;
  width: 9.5%;
`;

export const ListHeaderDataInicio = styled.div`
  display: flex;
  align-items: center;
  width: 17%;

`;
export const ListHeaderDataFinal = styled.div`
  display: flex;
  width: 18.5%;

`;


export const ListHeadeProjeto = styled.div`
  display: flex;
  width: 15%;
`;

export const ListHeaderStatus = styled.div`
  display: flex;
  width: 39.5%;
`;

