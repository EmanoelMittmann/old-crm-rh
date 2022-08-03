import styled from "styled-components";

export const ContainerArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    margin-right: 1.5em;
    border-radius: 50%;
    transition: ease-in 0.2s;

    &:hover{
        background-color: white;
        cursor: pointer;
        -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
`

export const Img = styled.img`
    width: 18px;
`
