import styled from "styled-components";

const CancelButton = styled.button`
    width: ${(props) => props.width ? props.width : '108px'};
    padding: ${(props) => props.padding};
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color ? props.color : '#eff2f4'};
    color:#212B36;
    font-family: "Poppins", sans-serif;
    font-size: 0.84rem;
    white-space: nowrap;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    border: 1.5px solid #919EAB52;
    margin: ${props => props.margin};
`

export default CancelButton