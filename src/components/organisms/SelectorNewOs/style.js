import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5em 1.5em 0 1.5em;
  width: 91.2%;
  min-height: 80vh;
  background-color: white;
  border-radius: 20px;
  margin: auto;
  position: relative;
  top: 40px;

  @media (min-width: 1000px) {
    width: 95%;
  }
`;

export const ScrollContainer = styled.ul`
  overflow-y: scroll;
  height: 20em;
  width: 100%;
  border-bottom: 1px solid #ccc;

  &::-webkit-scrollbar{
    width: 6px;
  }

  &::-webkit-scrollbar-track{
    background-color: #eee;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb{
    border-radius: 20px;
    border: 3px solid #ddd;
  }
`
