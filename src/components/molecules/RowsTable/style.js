import styled from "styled-components";

export const ContainerTr = styled.tr`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 1em;
  height: 48px;
`;

export const ValuesTd = styled.td`
  font-family: "Poppins";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: ${(props) => props.left};
  width: ${(props) => props.w};
`;

export const PopOver = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 1px 0px 10px #ccd1d6 ;
  display: flex;
  width: auto;
  height: auto;
  position: absolute;
  z-index: 1;
  transform: translate(80em,2em);

  &:hover{
    visibility: visible;
  }
`;

// export const PopOverText = styled.span`
//   visibility: hidden;
//   width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   padding: 5px 0;
//   border-radius: 6px;
//   position: absolute;
//   z-index: 1;
// `;
