import styled from "styled-components";

export const Father = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: 4em;
`;

export const ListOptions = styled.div`
  display: flex;
  padding: 0.5em;
  flex-direction: column;
  width: 74.5%;
  height: 6.5em;
  border-radius: 8px;
  transform: translateY(3.5em);
  background-color: white;
  position: absolute;
  z-index: 10;
  box-shadow: 1px 0px 10px #ddd;
  overflow-y: scroll;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export const Options = styled.p`
  padding: 0.5em 0em 0em 1em;
  border-radius: 5px;
  width: 100%;
  color: black;
  cursor: pointer;
  font-weight: ${(props) => props.selected && "600"};
  &:hover {
    background-color: #ddd;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1em;
  cursor: pointer;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  padding: 0 1em 0 0;
`;

export const Values = styled.div`
  padding: 1em;
  margin-top: 1em;
  width: 12em;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 1px 0px 10px #aaa;
  background-color: #407bff;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
`;
