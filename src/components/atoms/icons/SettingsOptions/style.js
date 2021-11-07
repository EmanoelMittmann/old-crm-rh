import styled from "styled-components"

export const OptionsContainer = styled.div` 
    padding: 0.2em 0.5em 0.5em 0.5em;
    position: relative;
    margin-left: 3em;
    margin-right: 0.5em;

    svg {
        fill: ${props => props.color};
    }

`
export const OptionsMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -100px;
    top: 40px;
    width: 134px;
    height: 77px;
    border-radius: 8px; 
    background-color: white;
    z-index: 5;
    box-shadow: 0px 16px 32px #919EAB66;
`
export const OptionsMenuItem = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    background-color: transparent;
    padding: 0.3em 0.5em 0.3em 1.5em;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: black;
    cursor: pointer;
`
