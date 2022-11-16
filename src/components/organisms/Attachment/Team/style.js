import styled from "styled-components";

export const ProfessionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 23.5em;
  padding-left: 1em;

  .professional {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const ProfessionalName = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProfessionalJob = styled.span`
  display: flex;
  white-space: nowrap;
  align-items: center;
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
`;
export const ProfessionalHours = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 10em;
`;

export const ProfessionalOvertime = styled.span`
  display: flex;
  align-items: center;
  width:${props => props.width ? props.width : '8%'};
`;

export const ProfessionalPercent = styled.span`
  width:${props => props.w ? props.w : '9.5%'};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const ProfessionalStatus = styled.span`
  display: flex;
  width: 5em;
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
`

export const ContainerLabel = styled.div`
    width: 100%;
     gap: 1em;
     margin-bottom: 2em;
`
