import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1em;
  border-radius: 10px;
  height: 60px;

   &:hover{
    background-color:#f4f6f8;
  }
`;

export const ContainerCompany = styled.div`
  width: 22.3%;
  padding-left: 10px;
`;

export const ContainerProfessional = styled.div`
  width: 20%;
`;

export const ContainerProject = styled.div`
 
`;

export const ContainerCnpj = styled.div`
  width: 18.2%;
`;

export const ContainerNFe = styled.div`
  width: 16.3%;
`;

export const ContainerDatePayment = styled.div`
  width: 12.2%;
`;

export const ContainerStatus = styled.div`
  width: 20.2%;
  gap: 5em;
  display: flex;
`;
