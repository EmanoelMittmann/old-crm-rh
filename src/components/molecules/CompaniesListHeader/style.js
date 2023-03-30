import styled from "styled-components";

export const ListHeaderCompanyContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f4f6f8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;

  svg {
    margin-left: 1em;
    cursor: pointer;
  }
`;

export const ListHeaderRazaoSocial = styled.div`
  display: flex;
  align-items: center;
  width: 18.9%;
  padding-left: 3em;
`;

export const ListHeaderCNPJ = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
`;

export const ListHeaderDate = styled.div`
  display: flex;
  width: 16.2%;
  justify-content: flex-start;
`;

export const ListHeaderCity = styled.div`
  display: flex;
  width: 14.2%;
  justify-content: flex-start;
`;

export const ListHeaderUF = styled.div`
  display: flex;
  width: 14.2%;
  align-items: center;
  padding-left: 5em;
`;

export const ListHeaderSituation = styled.div`
  display: flex;
  width: 17.1%;
  align-items: center;
  padding-left: -2em;
`;

export const ListHeaderType = styled.div`
  display: flex;
  width: 14,2%;
  align-items: center;
`;
