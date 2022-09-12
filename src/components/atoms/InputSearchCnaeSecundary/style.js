import styled from "styled-components";

export const InputSearchWithLabel = styled.div`
  margin-right: 23px;
  height: 45px;
  border: ${(props) => `1.5px solid ${props.error ? "#ff4842" : "#919EAB52"}`};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "90%")};
  margin-bottom: 18px;

  .div1{
    display:flex;
    width: 100%;
    gap:5px;
    flex-flow: row wrap;
    margin-top: 10px;
  }
  `

export const DefaultInputCnae = styled.input`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 40px;
  padding: ${(props) => props.padding};
  outline: none;
  border: none;
  color: black;
  border-radius: 8px;
  position: relative;
  box-sizing: border-box;

  &::placeholder {
    position: fixed;
    padding: 6px;
    color: ${(props) =>
      props.placeholderColor ? props.placeholderColor : "#919EAB"};
    opacity: 0.7;
    text-align: ${(props) =>
      props.placeholderPosition ? props.placeholderPosition : "left"};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field {
    color: #919eab;
  }

  &::-webkit-datetime-edit,
  &::-webkit-inner-spin-button,
  &::-webkit-clear-button {
    display: ${(props) => props.displayDate};
    position: absolute;
    left: 50px;
    top: 9px;
  }

  ::-webkit-calendar-picker-indicator {
    margin-left: -1em;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export const ListItens = styled.div`
  color: blue;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: #dbe9f4;
  margin-top: 45px;
  z-index: 10;
  position: absolute;
  cursor: pointer;
`;

export const Itens = styled.div`
  :hover {
    background-color: #b4c2cf;
    border-radius: 5px;
  }
`;

export const ValuesSelected = styled.div`
  color: blue;
  background-color: #dbe9f4;
  border-radius: 8px;
  font-size: 10px;
  padding: 5px;
  margin: 10px;
`;
