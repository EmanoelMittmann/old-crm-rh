import styled from "styled-components";

export const ModalContainer = styled.div`
    position: absolute;
    top: 55%;
    display: flex;
    flex-direction: column;
    left: 60%;
    transform: translate(-87%, -65%);
    width: 427px;
    height: 16em;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;

    .header{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-around;
        height: 20%;
    }

    .close{
        cursor: pointer;
    }
`

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-family: 'Poppins';
  font-weight: 700;
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
`;

export const IconExclamation = styled.img`
    margin-right:0.5em;
`
export const ModalDeleteMessage = styled.p`
    font-size: 1rem;
    color: #161C24;
    margin-left: 2em;
`
export const ContainerSelect = styled.div`
    margin-top:3em;
    display: flex;
    justify-content: center;
`

export const ContainerFooter = styled.div`
    height: 20%;
    padding-top: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top:1px solid #CCD1D6;
    width: 89%;
    margin: auto;
`