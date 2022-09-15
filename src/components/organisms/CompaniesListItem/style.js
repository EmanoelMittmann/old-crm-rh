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
  min-width: 20%;
  padding-left: 2em;
  padding-right: 1em;
`;

export const CompanyCNPJ = styled.div`
  display: flex;
  min-width: 15%;
  align-items: center;
  margin-left: 1em;
`;

export const CompanyDate = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`;

export const CompanyCity = styled.div`
  display: flex;
  width: 28%;
  justify-content: center;
  padding-left: 5em;
`;

export const CompanyUF = styled.div`
  display: flex;
  min-width: 20%;
  padding-right: 3em;
  justify-content: center;
`;

export const CompanySituation = styled.div`
  display: flex;
  width: 23%;
  padding-left: 1em;
  
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

