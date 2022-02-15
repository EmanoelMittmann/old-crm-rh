import styled from "styled-components"

export const Main = styled.div`
    display: grid;
    grid-template-columns: .5fr 1fr 2fr 1fr;
    padding-left: 3.3em;
    width: 100%;
    height: 50px;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    border: none;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
        color: #407BFF;
        font-weight: 500;
        text-decoration: underline;
    }
`