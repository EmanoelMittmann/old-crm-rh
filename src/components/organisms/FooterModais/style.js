import styled from "styled-components";

export const ContainerSettingsSectionFooter = styled.footer`

    width: 100%;
    height:40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`
export const PagesBackAndForth = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 01rem;
    font-weight: 500;
    color: #161C24;
    margin-right: 2em;
    padding: 0.5em 0.5em 0.7em 0.5em;
`

export const ArrowContainer = styled.div`
    width: 10%;
    display: flex;
    margin-right: 2.8em;
`

export const LeftArrowContainer = styled.i`
    display: block;

    svg{
        transform: rotate(-180deg);
    }

    &:hover {
        cursor: pointer;
    }
    
`

export const RightArrowContainer = styled.i`
    display: block;

    &:hover {
        cursor: pointer;
    }
`