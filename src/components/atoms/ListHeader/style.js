import styled from "styled-components";

export const ListHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: #F4F6F8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 2em;

    svg{
        margin-left: 1em;
        cursor: pointer;
    }
`

export const ListHeaderTitle = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: black;
    margin-left: ${props => props.margin ? props.margin : '3em'};
    width: ${props => props.width};
    cursor: pointer;
`

