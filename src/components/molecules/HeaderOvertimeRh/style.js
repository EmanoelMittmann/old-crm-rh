import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 100%;
    height: 50px;
    background-color: #F4F6F8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    margin-top: 1em;
    justify-content: space-between;


    svg{
        margin-left: 1em;
        cursor: pointer;
    }
`

export const ListHeaderProfessional = styled.div`
  display: flex;
  align-items: center;
  width: 21.7%;
`;

export const ListHeaderLaunch = styled.div`
  display: flex;
  align-items: center;
  width: 16.5%;

`;

export const ListHeadeProject = styled.div`
  display: flex;
  width: 17%;
`;
export const ListHeadeQntHours = styled.div`
  display: flex;
  width: 20%;
`;

export const ListHeaderStatus = styled.div`
  display: flex;
  width: 20.5%;
`;

