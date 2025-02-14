import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 55%;
    left: 49.5%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 240px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;
`
export const ContainerOverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 5;
`
export const ModalContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 35%;
    border-radius: 0 0 15px 15px;
    margin-top: 2em;
    border-top: 1.5px solid #919EAB52;
`

export const ModalDeleteMessage = styled.p`
    font-size: 1rem;
    color: #161C24;
    margin-left: 2em;
`

export const IconInfoImg = styled.img`
    margin-right:0.5em;
`