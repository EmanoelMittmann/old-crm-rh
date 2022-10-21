import styled from "styled-components";

export const ListHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f4f6f8;
  border-radius: 8px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
  padding: 1em;

  .arrow{
    cursor: pointer;
  }
`;

export const ListHeaderProfessional = styled.div`
  width: 33.3%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const ListHeaderCNPJ = styled.div`
  width: 33.3%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ListHeaderValueOs = styled.div`
  width: 33.3%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
