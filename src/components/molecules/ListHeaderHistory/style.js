import styled from "styled-components";

export const HeaderContainer = styled.div`
    width:100%;
    display: flex;
    height: 50px;
    align-items: center;
    margin-top: 2em;
    background-color: #F4F6F8;
    border-radius: 10px;

   svg {
        margin-left: 1em;
        cursor: pointer;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`

export const Title = styled.h5`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding: 0 0.3em 0 3em;
`;


export const Styles = styled.div`
  table {
    width: 98%;
    border-spacing: 0;
  }
`;

export const Column = styled.th`
  color: black;
  width: ${(props) => props.width};
  padding-left:  ${(props) => props.padding};
  padding: 0.1rem;
  text-align: left;
`;
