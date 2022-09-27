import styled from "styled-components";

export const ContainerCompaniesListItem = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  height: 60px;

`;

export const CompanyRazaoSocial = styled.div`
  display: flex;
  min-width: 20%;
  padding-left: 3em;

`;

export const CompanyCNPJ = styled.div`
  display: flex;
  min-width: 15%;
  margin-left: 2em;
  position: relative;
`;

export const CompanyDate = styled.div`
  display: flex;
  width: 20%;
  position: relative;
`;

export const CompanyCity = styled.div`
  display: flex;
  min-width: 18%;
  padding-left: 2.5em;

`;

export const CompanyUF = styled.div`
  display: flex;
  min-width: 12%;
  padding-right: 5.5em;
  justify-content: center;
  position:relative;

`;

export const CompanySituation = styled.div`
  display: flex;
  width: 18%;
  padding-left: 2em;

`;

export const ComapaniesListOptions = styled.div`
     display: flex;
    justify-content: center;
    width: 15%;

    svg {
        fill: ${props => props.optionsColor};
    }
`

