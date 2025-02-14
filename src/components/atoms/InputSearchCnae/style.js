import styled from 'styled-components';

export const InputSearchWithLabel = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : '90%')};
  margin-bottom: 1em;
`;

export const DefaultInputCnae = styled.input`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  width: ${(props) => (props.width ? props.width : '100%')};
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
    props.placeholderColor ? props.placeholderColor : '#acb4ba'};
    opacity: 0.7;
    text-align: ${(props) =>
    props.placeholderPosition ? props.placeholderPosition : 'left'};
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
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  color: #424542;
  display: flex;
  flex-direction: column;
  width: 60%;
  max-height: 500px;
  overflow: auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 45px;
  z-index: 10;
  position: absolute;
  box-shadow: 1px 2px 5px #ccc;
  cursor: pointer;
`;

export const Itens = styled.div`
  padding: 2px 0;
  display: block;
  font-weight: ${props => props.selected ? 700 : 400};
  :hover {
    background-color: #ccc;
    border-radius: 5px;
  }
`;

export const ValuesSelected = styled.div`
  color: #424542;
  background-color: #fff;
  border-radius: 8px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  box-shadow: 1px 2px 5px #ccc;
  cursor: pointer;
`;

export const Container = styled.div`
  margin-top: 0.5em;
  display: flex;
  width: 100%;
  gap: 5px;
  flex-wrap: wrap;
`
