import styled from "styled-components";

export const BadgeContainer = styled.div`
    width: 180px;
    height: 45px;
    padding: 1em;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${props => props.bg || '#fff'};
    color: ${props => props.color || '#000'};
    border-radius: 8px;
`