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
  align-items: center;
  width: 32%;
  margin-left: -2em;
`;

export const ListHeaderCNPJ = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 30%;
  margin-left:3em;
`;

export const ListHeadeSalarioOs = styled.div`
  display: flex;
  align-items: center;
  width: 28%;
  margin-left: -0.7em;
`;

export const ListHeaderComission = styled.div`
  display: flex;
  align-items: center;
  width: 18%;
  margin-left: 5em;
`;


export const ListHeaderTotal = styled.div`
  display: flex;
  align-items: center;
  width: 19%;
  margin-left: 3.5em;
`;
