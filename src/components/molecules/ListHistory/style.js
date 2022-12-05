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
`;

export const Column = styled.div`
  width: 33.3%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .popover__title {
    white-space: nowrap;
  }

  .popover__content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transform: translate(-1em, -7em);
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    font-family: 'Poppins';
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    width:auto;
    height: auto;
    white-space: normal;
  }

  .popover__content::before {
    position: absolute;
    z-index: -1;
    content: "";
  }

  .popover__wrapper:hover .popover__content{
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transform: translate(-1em, -9em);
    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }  
`;
