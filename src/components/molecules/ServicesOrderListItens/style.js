import styled from 'styled-components';

export const ContainerOSListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-radius:10px;

   &:hover{
    background-color:#f4f6f8;
  }
`;

export const ProfessionalName = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width:20%;
  padding-left: 3em;
`;

export const ProfessionalCNPJ = styled.div`
  display: flex;
  width: 25%;
  padding-left: 3.5em;
  justify-content: flex-start;

`;

export const DateGerationOS = styled.div`
  display: flex;
  width: 18%;
  padding-left: 2em;
 

`;

export const NumberOS = styled.div`
  display: flex;
  width: 16%;
  padding-left: 1em;
`;

export const ReferenceOS = styled.div`
  display: flex;
  width: 25%;
  padding-left: 5em;
 

`;

export const ProfessionalStatusOS = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-start;
  padding-left: 0.7em;
  
`;

export const ProfessionalTextStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  background-color:${props => props.bg};
  color:${props => props.text};
  border-radius: 40px;
  font-weight: 700;

`
