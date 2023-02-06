import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between ;
  width: 94%;
  height: 28%;
  margin: 2em 0em 0em 0em;
  gap:7em;
  border-top: 1px solid #CCD1D6;
  padding-top:1.5em ;
;
`


export const ContainerInputsSelect = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
  
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 55%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 240px;
  background-color: white;
  border-radius: 15px;
  padding-left: 2em;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-between ;
  padding: 2em 0 1em 0;
  align-items:center;

`;
export const Title = styled.h3`
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;

`;
