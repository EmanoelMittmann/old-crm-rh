import styled from 'styled-components';

const GreenButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontSize};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    background-color: rgba(30, 203, 79, 1);
    box-shadow: 0px 8px 16px #0000003D;
`

export default GreenButton;