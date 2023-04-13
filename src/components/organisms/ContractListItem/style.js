import styled from "styled-components";

export const ContainerContractListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 10px;

  &:hover{
     background-color: #F4F6F8;
  }
`;

export const ProfessionalsListItems = styled.div`
  display: inline-flex;
  justify-content: ${(props) => props.content};
  white-space: nowrap;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin-left:${(props) => props.margin};
  width: ${(props) => props.width};

  #box {
    margin-right: 6px;
    width: 1.2em;
    height: 1.2em;
  }
  #box:focus {
    outline: none;
  }
  p{
    width: 8em;
    text-overflow:ellipsis;
    overflow:hidden;
    padding-left: 0.5em;
  }
`;

export const Img = styled.img`
    width: 40px;
    height:40px;
    border-radius:50px;
`