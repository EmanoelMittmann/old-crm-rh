import styled from "styled-components";

export const ProfessionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 37.5em;
  padding-left: 0.5em;

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
  font-size: 0.7em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

`;
export const ProfessionalHours = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 19em;
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
  width: 13em;
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
    margin-bottom: 2em;
`

export const Styles = styled.div`
  table {
    width: 100%;
    margin: 3em 0 3em;
    border-spacing: 0;
    border-radius: 8px;

    th {
      padding: 0.1rem;
      text-align: left;
      padding-left: 3em;

      :last-child {
        border-right: 0;
      }

      &:nth-child(4) {
        text-align: left;
        padding: 0;
      }

      &:nth-child(3) {
        text-align: left;
        padding: 0;
      }
    }

  }
`;

export const Column = styled.th`
  color: black;
  width: ${(props) => props.w};
  font-weight: 400;
`;
