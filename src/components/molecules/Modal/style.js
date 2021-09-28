import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
`

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 427px;
    height: 286px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;
`

export const ModalTitle = styled.h3`
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    padding: 1.6em;
`

export const ModalContainerInput = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalInputLabel = styled.span`
    display: inline-block;
    padding: 0 0.3em 0 0.3em;
    position: absolute;
    font-size: 0.7rem;
    color: #454F5B;
    font-weight: 600;
    background: white;
    top: -10px;
    left: 10px;
`
export const ModalContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 30%;
    border-radius: 0 0 15px 15px;
    margin-top: 3.6em;
    border-top: 1.5px solid #919EAB52;
`
