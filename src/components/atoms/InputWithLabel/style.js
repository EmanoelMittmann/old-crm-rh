import styled, { keyframes } from "styled-components";

export const InputWithLabelContainer = styled.div`
   width: ${props => props.widthContainer};
   display: flex;
   flex-direction: column;
   margin: ${props => props.margin};
   justify-content: ${props => props.justify};
   padding: ${props => props.padding};
`
