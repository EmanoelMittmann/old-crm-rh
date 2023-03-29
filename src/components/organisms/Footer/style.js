import styled from "styled-components";

export const ContainerSettingsSectionFooter = styled.footer`
    width: 100%;
    height: ${(props) => (props.height ? props.height : '70px')};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: ${(props) => (props.border ? props.border :'2px solid #F4F6F8') };
`
export const PagesBackAndForth = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
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