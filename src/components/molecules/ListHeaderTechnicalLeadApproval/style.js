import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 100%;
    height: 40px;
    background-color: #F4F6F8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 2em;
    justify-content: space-between;


    svg{
        margin-left: 1em;
        cursor: pointer;
    }
`

export const ListHeaderProfessional = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const ListHeaderLaunch = styled.div`
  display: flex;
  align-items: center;
  width: 20%;

`;

export const ListHeadeProject = styled.div`
  display: flex;
  width: 20%;
`;

export const ListHeaderStatus = styled.div`
  display: flex;
  width: 20%;
`;

