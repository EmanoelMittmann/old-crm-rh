import styled from 'styled-components';

export const ContainerCompaniesListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const CompanyRazaoSocial = styled.div`
  display: flex;
  width: 19.5%;
  padding-left: 3em;
`;

export const CompanyCNPJ = styled.div`
  display: flex;
  width: 16%;
  justify-content: flex-start;
`;

export const CompanyDate = styled.div`
  display: flex;
  width: 17%;
  justify-content: flex-start;
`;

export const CompanyCity = styled.div`
  display: flex;
  width: 14%;
`;

export const Companytype = styled.div`
  display: flex;
  width: 12%;
  justify-content: flex-start;
`

export const CompanyUF = styled.div`
  display: flex;
  width: 12%;
  justify-content: flex-start;
`;

export const CompanySituation = styled.div`
  transform: translateX(-43px);
  display: flex;
  width: 14.2%;
  padding-left: 2em;
`;

export const ComapaniesListOptions = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 90%;

  svg {
    fill: ${(props) => props.optionsColor};
  }
`;

export const CompanyTextStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${props => props.bg};
  width: 150px;
  height: 30px;
  color:${props => props.text};
  border-radius: 15px;
  font-weight: 700;

`