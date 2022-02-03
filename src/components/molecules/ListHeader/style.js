import styled from "styled-components"

export const Main = styled.div`
    width: 100%;
    height: 40px;
    background-color: #F4F6F8;
    border-radius: 8px;
    display: grid;
    grid-template-columns: .5fr 1fr 1fr 2fr;
    padding-left: 3em;
    align-items: center;
    margin-top: 2em;

    svg{
        margin-left: 1em;
        cursor: pointer;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
`

