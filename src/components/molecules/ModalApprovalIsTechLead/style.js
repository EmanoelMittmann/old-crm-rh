
import styled from "styled-components";

export const ContainerTeam = styled.div`
    height: 150px;
    border-top: 1px solid #F4F6F8;
    display: flex; 
    flex-wrap: wrap;
    justify-content: left;
    padding: 1.5em 1em 1.5em 1em;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 780px;
  height: 650px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const ModalTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;
`;

export const ContainerButtons = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  top:1em;
  gap: 1em;
  margin-left: 3em;
  margin-bottom: ${props => props.bottom};
  border-top: 1px solid rgba(204, 209, 214, 1)
  
`