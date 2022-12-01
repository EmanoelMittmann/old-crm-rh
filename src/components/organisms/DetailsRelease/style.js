import styled from "styled-components";

export const Container = styled.div`
    width:90em;
    height: 34em;
    margin: auto;
    border-radius: 8px;
    background-color: white;
    padding: 2em;
`

export const Flex = styled.div`
    display: flex;
    flex-direction:row;
    margin-top: ${(props) => props.mt};
    justify-content: space-between;

    .text{
        color:#5A646E;
        font-weight:600px;
    }
`

export const Text = styled.h3`
    font-size: 24px;
`