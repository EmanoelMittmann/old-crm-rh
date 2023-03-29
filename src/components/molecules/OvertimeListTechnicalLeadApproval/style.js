import styled from "styled-components";

export const Main = styled.div`
 width: 98%;
  display: flex;
  align-items: center;
  padding: 1em;
  height: 50px;
  border-radius: 10px;
  margin-left: 0.9em;
  margin-top: 0.5em;

  &:hover{
    background-color:#f4f6f8;
  }
  
`;


export const ContainerUser = styled.h4`
  display: flex;
  width: ${props => props.w ? props.w : '28%'};
  gap: 1em;
  align-items: center;

  .img {
    width: 2.8em;
    border-radius: 50%;
  }
`;
export const ContainerLaunch_date = styled.div`
  display: flex;
  width: ${props => props.w ? props.w : '20%'};
`;

export const ContainerStatus = styled.div`
  display: flex;
  width: 15%;
`;
export const ContainerQntHours = styled.div`
  display: flex;
  width: 22%;
`;

export const ContainerProject = styled.div`
  display: flex;
  width: ${props => props.w ? props.w : '20%'};
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
