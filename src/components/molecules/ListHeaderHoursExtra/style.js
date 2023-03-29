import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #F4F6F8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 0.5em;
    justify-content: space-between;


    svg{
        margin-left: 1em;
        cursor: pointer;
    }
`

export const ListHeaderItem = styled.div`
  display: flex;
  align-items: center;
  width: 10.2%;
`;

export const ListHeaderDataInicio = styled.div`
  display: flex;
  align-items: center;
  width: 17%;

`;
export const ListHeaderDataFinal = styled.div`
  display: flex;
  width: 15.3%;

`;
export const ListHeadeQntHours = styled.div`
  display: flex;
  width: 20%;
`;


export const ListHeadeProjeto = styled.div`
  display: flex;
  width: 15%;
`;

export const ListHeaderStatus = styled.div`
  display: flex;
  width: 39.5%;
`;

