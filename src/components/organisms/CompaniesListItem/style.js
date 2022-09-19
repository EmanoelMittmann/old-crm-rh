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
  padding-left: 2em;

`;

export const CompanyCNPJ = styled.div`
  display: flex;
  min-width: 15%;
  margin-left: 2em;
  position: relative;
`;

export const CompanyDate = styled.div`
  display: flex;
  width: 24%;
  position: relative;
`;

export const CompanyCity = styled.div`
  display: flex;
  min-width: 15%;
  padding-left: 3em;

`;

export const CompanyUF = styled.div`
  display: flex;
  min-width: 18%;
  padding-right: 1em;
  justify-content: center;
  position:relative;

`;

export const CompanySituation = styled.div`
  display: flex;
  width: 30%;
  padding-left: 1em;

`;

export const ComapaniesListOptions = styled.div`
     display: flex;
    justify-content: center;
    width: 10%;

    svg {
        fill: ${props => props.optionsColor};
    }
`

