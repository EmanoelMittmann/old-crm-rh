import styled from "styled-components";

export const ContainerCompaniesListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 70px;

  @media (max-width: 1030px) {
    width: 90%;
  }
`;

export const CompanyRazaoSocial = styled.div`
  display: flex;
  width: 20%;
  padding-left: 2em;
  padding-right: 1em;
`;

export const CompanyCNPJ = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  margin-left: 2.5em;
`;

export const CompanyDate = styled.div`
  display: flex;
  width: 20%;
  padding-left: 5em;
`;

export const CompanyCity = styled.div`
  display: flex;
  width: 20%;
  padding-left: 5em;
`;

export const CompanyUF = styled.div`
  display: flex;
  width: 20%;
  padding-left: 5em;
`;

export const CompanySituation = styled.div`
  display: flex;
  width: 20%;
  padding-left: 5em;
`;

export const ComapaniesListOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 2%;

    @media(max-width:1030px){
        margin-left: 50px;
        width: 100%;
    }

    svg {
        fill: ${props => props.optionsColor};
    }
`

