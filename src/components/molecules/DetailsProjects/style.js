
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 680px;
  height: 780px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;

`;

export const ModalTitle = styled.h3`
  font-size: 1rem;
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
export const ContainerData = styled.div`
    width: 91,5%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: -1em 2em;
    border-bottom: 1px solid rgba(204, 209, 214, 1);
    padding-bottom: 1em;
`
export const ContainerTime = styled.div`
    width: 93%;
    display: flex;
    flex-direction: column;
    margin: 2em 2em 0.8em 2em;
`
export const ContainerDataDate = styled.div`
    width: 51%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 1.5em 2em;
`
export const ContainerDataUser = styled.div`
    width: 43%;
    display: flex;
    flex-direction: row;
    margin: 0.3em 1em 0 0;
`
export const ContainerDataDateDuo = styled.div`
    width: 51%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 1em 2em;
`
export const ContaineTitles = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 0em 0em 1em 2em;
`

export const ContaineTitlesTwo = styled.div`
    width: 57%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 1em 2em;
`
export const ContaineTitlesCost = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 1em 2em 0 2em;
`
export const ContaineTitlesDuo = styled.div`
    width: 51.5%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 1.5em 2em;
`
export const StyleName = styled.h5`
    width: 35.5%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleTipe = styled.h5`
    width: 20%;
    font-family: 'Poppins';
    color: #5A646E;
`
export const StyleDate = styled.div`
    width: 8%;
    align-items:center;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    color: #5A646E;
    margin-top:-1.5em;
    margin-right: 5em;
`

export const EstimatedCost = styled.div`
    align-items:center;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #5A646E;
    margin-top:-1.5em;

`
export const StyleTitle = styled.h6`
    font-family: 'Poppins';
`
export const StyleTitleProject = styled.h6`
    width: 26%;
    font-family: 'Poppins';

`
export const StyleTitleProjectTime = styled.h5`
    width: 24%;
    font-family: 'Poppins';

`
export const ContainerTitles = styled.h5`
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

export const TableLine = styled.div`
    display: flex;
    width: 90%;
    flex-wrap:wrap;
    border-bottom: 1.5px solid #EFF2F4;
    margin-left:2em;
    &:last-child{
        border-bottom: none;
    }`

export const ProfilePicture = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 1em;
`
export const ProfessionalJob = styled.div`
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;
