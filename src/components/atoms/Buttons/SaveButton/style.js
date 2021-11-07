import styled from "styled-components";

const SaveButton = styled.button`
    width: 115px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #407BFF;
    box-shadow: 0px 8px 16px #0000003D;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 0.84rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: ${props => props.margin};
`

export default SaveButton