import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 100%;
  height: 40px;
  background-color: #f4f6f8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 2em;
  justify-content: space-between;

  svg {
    margin-left: 1em;
    cursor: pointer;
  }
`;

export const ListHeaderProfessional = styled.div`
  display: flex;
  align-items: center;
  width: 23.5%;

  svg{
    cursor: pointer;
  }

`;
export const ListHeaderCompanies = styled.div`
  display: flex;
  align-items: center;
  width: 15%;

`;

export const ListHeaderCNPJ = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 22%;
  margin-left: 5em;
`;

export const ListHeadeSalarioOs = styled.div`
  display: flex;
  align-items: center;
  width: 18%;
  margin-left: -0.7em;
`;

export const ListHeaderComission = styled.div`
  display: flex;
  align-items: center;
  width: 17%;
`;

export const ListHeaderValueExtraHour = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  margin-left: -0.7em;
`;

export const ListHeaderTotal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
  margin-left: 3.5em;
`;
