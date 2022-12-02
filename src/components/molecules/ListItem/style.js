import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    gap:4em;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const ContainerId = styled.div`
    display: flex;
    align-items: center;
        padding-left: 3.3em;
`
export const ContainerDateLançamento = styled.div`
    display: flex;
    align-items: center;
        padding-left: 8.5em;

`
export const ContainerDateEmissaoNF = styled.div`
    display: flex;
    align-items: center;
        padding-left: 11em;
        padding-right: 8em;

`
export const ContainerNumberNF = styled.div`
    display: flex;
    align-items: center;
        padding-left: 4.3em;
        padding-right: 6em;
`
export const ContainervalueNF = styled.div`
    display: flex;
    align-items: center;
        padding-left: 4em;
        padding-right: 1em;
`
export const ContainerArquivo = styled.div`
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