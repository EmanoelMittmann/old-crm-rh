import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #ccd1d6;
  height: 6.5em;
`;

export const Row = styled.div`
  display: flex;
  height: 80%;
  padding-left: 1em;
  align-items: center;
  flex-flow: row nowrap;
  
  .col{
    width: 33.3%;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .text{
    white-space: nowrap;
  }
`;
