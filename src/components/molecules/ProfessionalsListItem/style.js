import styled from 'styled-components';

export const ContainerProfessionalsListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 10px;

  &:hover{
    background-color:#f4f6f8;
  }
`;

export const ProfessionalProfile = styled.div`
  display: flex;
  align-items: center;
  width: 23.5%;
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
    width: ${(props) => props.width ? props.width : '160px'};
    height: ${(props) => props.height ? props.height : '35px'};
    margin: ${(props) => props.margin};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:center;
    font-size: 0.9rem;
    font-weight: 700;
    border-radius: 40px;
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
