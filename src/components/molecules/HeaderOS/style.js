import styled from "styled-components";

export const ListHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f4f6f8;
  border-radius: 8px;
  display: flex;
  margin: auto;
  margin-top: 2em;
  padding: 1em;

  .arrow{
    cursor: pointer;
  }
`;

export const ListHeaderProfessional = styled.div`
  width: 45%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const ListHeaderCNPJ = styled.div`
  width: 39%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const ListHeaderValueOs = styled.div`
  width: 16%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;
