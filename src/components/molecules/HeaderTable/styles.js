import styled from "styled-components";

export const ListHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f4f6f8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start ;
  margin-top: 2em;

  svg {
    margin-left: 1em;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width:100%;
  display: flex;
  height: 40px;
  align-items: center;
  margin-top: 2em;
  background-color: #f4f6f8;
`

export const ListHeaderTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: black;
  display: flex;
  justify-content:flex-start ;
  margin-left: ${(props) => (props.margin)};
  padding-right: ${props => props.right};
  padding-left: ${props => props.left};
  width: ${(props) => props.width};
`;

export const ListHeaderName = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    padding-left: 1em;
`

export const ListHeaderJob = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
`

export const ListHeaderEmail = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
`

export const ListHeaderPhoneNumbers = styled.div`
    display: flex;
    align-items: center;
    width: 14%;
`

export const ListHeaderPlace = styled.div`
    display: flex;
    align-items: center;
    width: 35%;
`

export const ListHeaderStatus = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    padding-left: 2em;
`