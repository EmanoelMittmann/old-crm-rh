import styled from "styled-components";

export const ContainerAbsolute = styled.div`
  display: flex;
  margin-top: 2em;
`;

export const ContainerGeneral = styled.div`
  width: 91.5%;
`;
export const ContainerCheckBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 20%;
  margin-bottom: 1em;
  height: 210px;
  margin-bottom: 1em;
  margin-left: 3em;
  gap: ${(props) => (props.gap ? props.gap : "2em")};
`;

export const ContainerCheckTitle = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20%;
  margin-bottom: 1em;
  margin-left: 1em;
`;
export const ContainerCheckBoxDuo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 3em;
  gap: 2em;
`;

export const SelectsItens = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: ${(props) => props.content};
  padding-right: ${(props) => props.right};
  align-items: center;
  font-family: "Poppins", sans-serif;
  width: ${(props) => props.width};
  gap: 0.5em;

  #box {
    margin-right: 10px !important;
    width: 1.2em !important;
    height: 1.2em !important;
  }
  #box:focus {
    outline: none;
  }

  .popover_content {
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    padding: 0.5em;
    position: absolute;
    transform: translate(0,0);
    text-align: center;
    font-weight: 600;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #bbb;
  }

  .popover_content:before {
    position: absolute;
    z-index: -1;
    content: "";
    right: calc(50% - 10px);
    top: -10px;
    border: transparent 10px solid;
    transition: transform 0.3s ease-out;
  }

  &:hover .popover_content {
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transform: translate(8em, 0px);
    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }
`;
