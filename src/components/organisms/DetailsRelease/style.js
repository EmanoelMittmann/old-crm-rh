import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 38em;
  margin: auto;
  border-radius: 8px;
  background-color: white;
  padding: 2em;
`;

export const History = styled.div`
  display: flex;
  height: 17.5em;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => props.mt};
  justify-content: space-between;
  border-bottom: ${(props) => props.bb};

  .text {
    color: #5a646e;
    font-weight: 600px;
  }
`;

export const Text = styled.h3`
  font-size: 24px;
`;

export const ContainerHeader = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccd1d6;
`;
