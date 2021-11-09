import styled from "styled-components"

export const MenuOptionsContainer = styled.div`
    position: relative;
    top: 5px;
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
    height: 90px;
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
    padding: 0.3em 0.5em 0.3em 1.1em;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 0.98rem;
    font-weight: 500;
    color: black;
    cursor: pointer;
`