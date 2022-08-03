import styled from "styled-components";

export const InputRadio = styled.input`
  &[type="radio"] {
	appearance: none;
	width: 18px;
	height: 18px;
	border: 1px solid ${props => props.color};
	border-radius: 50%;
	background-clip: content-box;
	padding: 2.5px;
    margin:${props => props.margin};
}

&[type="radio"]:checked {
	background-color: black;
}
`

export const LabelInputRadio = styled.label`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-left: 0.6rem;
	color: ${props => props.color}
`