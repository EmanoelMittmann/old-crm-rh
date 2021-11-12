import styled from "styled-components";

export const RegisterProjectTitleContainer = styled.header`
    display: flex;
    padding: 2em 0 1em 10%;
`

export const Img = styled.img`
    width: 18px;
`

export const RegisterProjectContainer = styled.div`
    width: 80%;
    background-color: white;
    margin: 0 auto;
    border-radius: 20px;
    padding: 2.5em 0 0.5em 0;
`

export const ContainerArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    margin-right: 1.5em;
    border-radius: 50%;
    transition: ease-in 0.3s;

    &:hover{
        background-color: white;
        -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
`