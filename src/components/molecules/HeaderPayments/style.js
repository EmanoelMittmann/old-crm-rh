import styled from "styled-components";

export const ListItemCompany = styled.div`
  display: flex;
  padding: 0;
  width: 22.3%;
`;
export const ListItemProfessional = styled.div`
  display: flex;
  width: 20%;
`;
export const ListItemProjects = styled.div`
  display: flex;
`;
export const ListItemCnpj = styled.div`
  display: flex;
  width: 18.2%;
`;
export const ListItemNfe = styled.div`
  display: flex;
  width: 16.3%;
`;
export const ListItemDatePayment = styled.div`
  display: flex;
  width: 12.2%;
`;
export const ListItemStatus = styled.div`
  display: flex;
  width: 20.2%;
`;

export const ListTitle = styled.h5`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: black;
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  margin-left: ${(props) => props.margin};
  padding-right: ${(props) => props.right};
  padding-left: ${(props) => props.left};
  width: ${(props) => props.width};
`;
