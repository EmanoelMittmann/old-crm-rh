import styled from "styled-components";

export const ValuesSelected = styled.div`
  color: blue;
  width:25%;
  background-color: #dbe9f4;
  border-radius: 8px;
  font-size: 10px;
  margin-top: 1em;
  margin-left: 1em;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;
`;

export const InputSearchWithLabel = styled.div`
  margin-right: 23px;
  height: 45px;
  margin-bottom:10px ;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "90%")};

  .div1{
    display:flex;
    width: 100%;
    gap:5px;
    flex-flow: row nowrap;
    margin-top: 10px;
  }
  `
