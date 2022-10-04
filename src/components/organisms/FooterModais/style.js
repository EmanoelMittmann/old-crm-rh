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
    font-size: 0.8rem;
    font-weight: 500;
    color: #161C24;


`

export const ArrowContainer = styled.div`
    width: 6%;
    display: flex;
    margin-right: 2.8em;
`

export const LeftArrowContainer = styled.i`
    display: block;


    svg{
        transform: rotate(-180deg);
        width: 2rem;

    }

    &:hover {
        cursor: pointer;
    }
    
`

export const RightArrowContainer = styled.i`
    display: block;
    
    svg{
        width: 2rem;

    }


    &:hover {
        cursor: pointer;
    }
`