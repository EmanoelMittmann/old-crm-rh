import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 4em;
  align-items: center;
  margin-top: 1em;
  padding: 1em;
`;

export const ContainerUser = styled.h4`
  display: flex;
  width: 52%;
  gap: 1em;
  align-items: center;

  .img {
    width: 3em;
    border-radius: 50%;
  }
`;
export const ContainerLaunch_date = styled.div`
  display: flex;
  width: 20%;
`;

export const ContainerStatus = styled.div`
  display: flex;
  width: 15%;
`;

export const ContainerProject = styled.div`
  display: flex;
  width: 20%;
`;
export const StatusHoursExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 235px;
  height: 30px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.text};
  border-radius: 40px;
  font-weight: 700;
  padding-left: 1em;
  padding-right: 1em;
`;
export const Text = styled.h4`
  font-family: "Poppins";
  font-weight: 500;
  color: #3b454f;
`;

export const User_name = styled.h4`
  font-family: "Poppins";
  font-weight: 500;
  color: #3b454f;

  &:hover{
        cursor: pointer;
        color: #407BFF;
        font-weight: 500;
  }
`;
