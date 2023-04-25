import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 25%;
    border-radius: 0 0 15px 15px;
    margin-top: 1.3em;
    border-top: 1.5px solid #919EAB52;
`

export const ContainerInputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1em;
    padding: 1em;
    padding-bottom: 1em;
    margin-top: 10px;
`
export const ProfessionalData = styled.div`
    width: 88%;
    height:50px;
    display: flex;
    flex-direction: row;
    padding: ${(props) => props.padding};
    background: #F2F5F8;
    align-items: center;
    margin-left:1.6em;
    border-radius:8px;
`
export const Img = styled.img`
    width: 40px;
    height:40px;
    border-radius:50px;
`

export const DivHours = styled.div`
    width: 30%;
    display: flex;
    flex-direction: flex-end;
    justify-content: flex-end;

`
export const ContainerInputsSelect = styled.div`
    width: 93.5%;
    display: flex;
    flex-direction: row;
    padding: 0em 0em 1em 1.7em;
    gap: 1em;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 427px;
  height: 435px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const  ModalStatus =styled.div`
    display: flex;
    flex-direction: row;
`

export const OpenModal = styled.div`
 display: flex;
  justify-content: center;
  align-items:center;
  cursor:pointer;
    
`
