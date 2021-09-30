import styled from "styled-components";

export const CloseButtonContainer = styled.button`
        width: 40px;
        height: 40px;
        border: none;
        color: #919EAB52;
        position: absolute;
        background: transparent;
        font-size: 1.5rem;
        top: 10px;
        right: 10px;
        border-radius: 15px;
        cursor: pointer;

        svg{
            width: 20px;
            height: 20px;
            fill: #DCE0E4;
            transition: fill 0.2s ease-in-out;
        }

        svg:hover{
            fill: black;
        }
`

