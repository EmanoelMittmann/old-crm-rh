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
  width: 16%;
  padding-left: 3em;
`;

export const CompanyCNPJ = styled.div`
  display: flex;
  width: 16%;
  margin-left: 2em;
  position: relative;
`;

export const CompanyDate = styled.div`
  transform: translateX(10px);
  display: flex;
  width: 16%;
  position: relative;
`;

export const CompanyCity = styled.div`
  transform: translateX(-40px);
  display: flex;
  width: 16%;
  padding-left: 2.5em;
`;

export const CompanyUF = styled.div`
  transform: translateX(76px);
  display: flex;
  width: 16%;
  position: relative;
`;

export const CompanySituation = styled.div`
  transform: translateX(-43px);
  display: flex;
  width: 16%;
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
