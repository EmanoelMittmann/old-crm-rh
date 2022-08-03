import styled from "styled-components";

export const TeamMemberPic = styled.img`
    border-radius: 50%;
    width: ${props => props.size};
    height: ${props => props.size};
    margin: ${props => props.margin};
    object-fit: cover;
`
