import styled from "styled-components";

export const ProfessionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5em;

  .professional {
    display: flex;
    flex-direction: column;
  }
`;

export const ProfessionalName = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.7em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

    @media (max-width: 1350px){
    font-size: 12px;
  }
`;
export const ProfessionalJob = styled.span`
  display: flex;
  white-space: nowrap;
  align-items: center;
  font-size: 0.7em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  white-space: nowrap;

    @media (max-width: 1350px){
    font-size: 10px;
  }
`;
export const ProfessionalHours = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

    @media (max-width: 1350px){
    font-size: 10px;
  }
`;

export const ProfessionalOvertime = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1350px){
    font-size: 10px;
  }
`;

export const ProfessionalPercent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1350px){
    font-size: 10px;
  }
`;

export const ProfessionalStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfessionalProfilePicture = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1em;
`;

export const ContainerLabel = styled.div`
  width: 100%;
  margin-bottom: 2em;
`;

export const Styles = styled.div`
  table {
    width: 100%;
    border-radius: 8px;

    tr {
      display: grid;
      align-items: center;
      text-align: left;
      padding: 1em;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;

export const Column = styled.th`
  color: black;
  font-weight: 400;

  @media (max-width: 1350px){
    font-size: 12px;
  }

`
