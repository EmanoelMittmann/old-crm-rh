
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 680px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;

`;

export const ModalTitle = styled.h1`
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
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;
`;

export const ContainerAbsolute = styled.div`
  height: 510px;
`

export const ModalContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 93%;
    border-radius: 0 0 15px 15px;
    border-top: 1px solid #CCD1D6;
    padding: 24px 33px ;
    margin: 0 2em;
    gap: 20px;
    `
export const ContainerData = styled.div`
    width: 93%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 1em 2em;
    border-bottom: 2px solid rgba(204, 209, 214, 1);
    padding-bottom: 2em;
`
export const StyleName = styled.h3`
    margin:-1.3em 0em 0 1.8em;
    font-family: 'Poppins';
    font-style: italic;
    color: #5A646E;
`
export const StyleDate = styled.div`
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #5A646E;
`
export const StyleTitle = styled.h4`
    font-family: 'Poppins';

`
export const ContainerTitles = styled.h4`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin: 1em 2em;

`
export const StyleDataDate = styled.div`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    margin-right:1.5em;
    line-height: 100%;
    color: #5A646E;
`
export const ContainerDataJustify = styled.div`
    width: 93%;
    display: flex;
    flex-direction: column;
    margin: 2em 2em;
    border-bottom: 2px solid rgba(204, 209, 214, 1);
    padding-bottom: 2em;
`
export const StyleDataJustify = styled.div`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    margin-top: 0.8em;
    margin-right:1.5em;
    line-height: 100%;
    color: #5A646E;
`
export const InputAprovalStyle = styled.div`
    width:30%;
    margin: 0 2em;
    `
