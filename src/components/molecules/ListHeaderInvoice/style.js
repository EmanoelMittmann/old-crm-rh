import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 100%;
    height: 40px;
    background-color: #F4F6F8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 0.5em;
    padding: 1.5em;
    justify-content: space-between;
    white-space:nowrap;
    svg{
        margin-left: 1em;
        cursor: pointer;
    }
`

export const ListHeaderItem = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
`;

export const ListHeaderData = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 19%;

`;
export const ListHeaderDataEmission = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 24%;
  margin-left:2em;
`;


export const ListHeadeNumberNF = styled.div`
  display: flex;
  align-items: center;
  width: 17%;
`;

export const ListHeaderValueNF = styled.div`
  display: flex;
  align-items: center;
  width: 11%;
  margin-right: 2em;
`;


export const ArquivoNF = styled.div`
  display: flex;
  align-items: center;
  width: 31%;
  margin-left: 2em;
`;