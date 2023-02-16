import styled from 'styled-components';

export const ContainerProfessionalsListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 10px;

  &:hover{
    background-color:#f4f6f8;
  }
`;

export const ProfessionalProfile = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  padding-left: 1em;
`;
export const ProfessionalJob = styled.div`
  display: flex;
  width: 15%;
  padding-left: 2em;

`;

export const ProfessionalEmail = styled.div`
  display: flex;
  width: 25%;
  padding-left: 2em;
`;

export const ProfessionalPhoneNumber = styled.div`
  display: flex;
  width: 15%;
  padding-left: 2em;
`;

export const ProfessionalCity = styled.div`
  display: flex;
  width: 25%;
  padding-left: 2em;

`;

export const ProfessionalStatus = styled.div`
  display: flex;
  width: 10%;
`;

export const Badge = styled.div`
  width: ${(props) => props.width ? props.width : '150px'};
  height: ${(props) => props.h};
  padding: 4px 24px;
  border-radius: 50px;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 700;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
`;

export const ProfessionalsListOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 3%;

  svg {
    fill: ${(props) => props.optionsColor};
  }
`;

export const ContainerIconOptions = styled.div`
  padding: 1em;
  cursor: pointer;
  @media (max-width: 1030px) {
    padding: -6em;
  }
`;
