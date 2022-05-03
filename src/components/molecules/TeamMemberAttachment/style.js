import styled from "styled-components"

export const TeamMemberDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-family: "Poppins", sans-serif;
font-weight: 500;
position: absolute;
left: ${props => props.position};
width: 155px;
height: 50px;
padding-left: 20px;
border-radius: 8px; 
background-color: white;
box-shadow: 0px 16px 32px #919EAB66;
z-index: 5;

&:before {
    content: "";
    width: 20px;
    height: 25px;
    left: -10px;
    top: 13px;
    clip-path: polygon(0 50%, 100% 100%, 100% 0);
    position: absolute;
    background-color: white;
}
`

export const Name = styled.p`
font-size: 0.9rem;
`

export const WorkLoad = styled.span`
font-size: 0.7rem;
`