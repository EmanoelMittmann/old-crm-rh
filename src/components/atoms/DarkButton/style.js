import styled from 'styled-components';

const DarkButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    box-shadow: 0px 8px 16px #0000003D;
    border-radius: 8px;
    width: ${(props) => props.width};
    height: 50px;
    background-color: #000000;
    color: white;
    border:none;
    cursor: pointer;
`

export default DarkButton;
