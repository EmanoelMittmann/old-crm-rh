import styled from "styled-components";

export const InputWithLabelContainer = styled.div`
   width: ${props => props.widthContainer};
   display: flex;
   flex-direction: column;
   justify-content: ${props => props.justify};
   padding: ${props => props.padding};
`

export const Label = styled.span`
    display: inline-block;
    padding: 0 0.3em 0 0.3em;
    position: absolute;
    font-size: 0.8rem;
    color: #454F5B;
    font-weight: 600;
    background: white;
    top: -10px;
    left: 10px;
`

export const ErrorMessage = styled.span`
    padding-left: 1em;
    color: #454F5B;
    font-size: 14px;
    height: 14px;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    color: #ff4842;
`