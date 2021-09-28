import styled from 'styled-components';

export const SettingsOption = styled.li`
    display: block;
    width: 90%;
    margin: 0 auto;
    height: 45px;
    border-radius: 4px;
    border-left: ${props => props.clicked ? "6px solid #407BFF" : "0px"};
    background: ${props => props.clicked ? "#EFF2F4" : "white"};
    font-weight: 600;
    font-size: 1rem;
    padding-left: 1em;
    display: flex;
    align-items: center;
`
