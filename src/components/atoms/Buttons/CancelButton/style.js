import styled from "styled-components";

const CancelButton = styled.button`
    width: 108px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eff2f4;
    color: #212B36;
    font-family: "Poppins", sans-serif;
    font-size: 0.84rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    border: 1.5px solid #919EAB52;
    margin: ${props => props.margin};
`

export default CancelButton