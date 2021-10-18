import styled from "styled-components";

export const InputWithLabelContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: ${props => props.justify};
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