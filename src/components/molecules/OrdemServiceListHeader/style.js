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

export const ListHeaderProfessional = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
`;

export const ListHeaderCNPJ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const ListHeaderNumberOs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const ListHeaderComission = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const ListHeaderEmail = styled.div`
  display: flex;
  align-items: center;
  width: 18%;
`;

export const ListHeaderTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 25%;
`;
