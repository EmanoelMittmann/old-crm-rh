import styled from "styled-components";

export const ContainerContractListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 10px;

  &:hover{
     background-color: #F4F6F8;
  }
    @media screen and (min-width: 640px) and (max-width: 1024px) {
    width: 100%;
  }

`;

export const ContractListItems = styled.div`
  display: inline-flex;
  justify-content: ${(props) => props.content};
  white-space: nowrap;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin-left:${(props) => props.margin};
  width: ${(props) => props.width};
   
  p{
    width: 8em;
    text-overflow:ellipsis;
    overflow:hidden;
    padding-left: 0.5em;
  }
`;

export const Img = styled.img`
    width: 40px;
    height:40px;
    border-radius:50px;
`

export const HistoryJob = styled.p`
  display: flex;
  width: 10%;
  padding-left: 3em;
  text-overflow:ellipsis;
  overflow:hidden;

`;

export const HistoryCompany = styled.p`
  display: flex;
  width: 13%;
  padding-left: 3em;
  text-overflow:ellipsis;
  overflow:hidden;

`;

export const HistoryDateSend = styled.p`
  display: flex;
  width: 14%;
  padding-left: 3em;

`
export const HistorySubscribeContract = styled.p`
  display: flex;
  width: 16%;
  padding-left: 2.5em;

`
export const HistoryDateFinishContract = styled.p`
  display: flex;
  width: 16%;
  padding-left: 1em;

`
export const StatusContract = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-weight: 700;
  width: 10%;
  height: 35px;
  background-color:${props => props.colorBg};
  color:${props => props.colortext};

`
export const ContainerIconOptions = styled.div`
  padding: 1em;
  cursor: pointer;
  @media (max-width: 1030px) {
    padding: -6em;
  }

`;