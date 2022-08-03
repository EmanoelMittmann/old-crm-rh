import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 5;
`

export const ModalContainer = styled.div`
    position: fixed;
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
    padding: ${props => props.padding};
    display: flex;
    align-items: center;
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
