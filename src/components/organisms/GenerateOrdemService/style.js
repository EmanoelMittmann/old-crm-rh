import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContainerChildren = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  margin-bottom:4em;
`;

export const Childrens = styled.div`
  width: 47%;
  height: 80vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 0px 30px #ccc;

  .Header{
    width: 98%;
    margin: auto;
    padding-left: 1em;
    padding-top: 1em;
    border-bottom: 1px solid #ccc;
  }
  .continuation{
    width: 98%;
    margin: auto;
    padding-left: 1em;
    padding-top: 3.8em;
  }
`;
