import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    gap:4em;
`
export const Container = styled.div`
    display: flex;
    white-space: nowrap;
    align-items: center;
`

export const ContainerId = styled.div`
    display: flex;
    width: 10%;
    padding-left: 3em;
`
export const ContainerDateLançamento = styled.div`
    display: flex;
    width: 20%;
    padding-left: 0.8em;
    
`
export const ContainerDateEmissaoNF = styled.div`
    display: flex;
    width: 19%;
    margin-left: 5em;
`
export const ContainerNumberNF = styled.div`
    display: flex;
    width:19%;
    padding-left: 6.5em;

`
export const ContainervalueNF = styled.div`
    display: flex;
    width: 24%;
    padding-left: 4em;
`
export const ContainerArquivo = styled.div`
    display: flex;
    width: 35%;
    margin-right:4em;
`

export const File = styled.button`
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