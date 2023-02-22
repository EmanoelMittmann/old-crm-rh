
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 96%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;

`;

export const ModalTitle = styled.h3`
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
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

export const ContainerData = styled.div`
    width: 91,5%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin: -1em 2em;
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid rgba(204, 209, 214, 1);
`
export const ContainerDataBank = styled.div`
    width: 91,5%;
    display: flex;
    flex-direction: column;
    margin: 2em 2em;
`

export const ContainerTime = styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    margin-top: 1em;
    margin-left: 2em;
`
export const ContainerBank = styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    margin-top: 1em;
`
export const ContaineTitles = styled.div`
    width: 91,5%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 0em 0em 1em 2em;
`

export const StyleName = styled.h5`
    width: 30%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleNameBank = styled.h5`
    width: 23%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleCnae = styled.h5`
    width: 100%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleTipe = styled.h5`
    width: 40%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleTipeBank = styled.h5`
    width: 31%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleTip = styled.h5`
    width: 25%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleDate = styled.div`
    width: 8%;
    align-items:center;
    font-family: 'Poppins';
    font-weight: 300;
    line-height: 100%;
    color: #5A646E;
    margin-top:-1.5em;
    margin-right: 5em;
`

export const StyleTitle = styled.h5`
    width: 30%;
    font-family: 'Poppins';
`
export const StyleTitless = styled.h5`
    width: 23%;
    font-family: 'Poppins';
`
export const StyleTitleProject = styled.h5`
    width: 40%;
    font-family: 'Poppins';

`
export const StyleTitleBank = styled.h5`
    width: 40%;
    font-family: 'Poppins';
`
export const StyleTitleBanks = styled.h5`
    width: 31%;
    font-family: 'Poppins';

`
export const ContainerTitles = styled.h5`
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const ContainerTitleBank = styled.h5`
    width: 80%;
    display: flex;
    flex-direction: row;
`
export const ContainerAbsolute = styled.h5`
  height: 480px;
`

