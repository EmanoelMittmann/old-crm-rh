import styled from "styled-components";

export const HeaderContainer = styled.div`
    width:100%;
    display: flex;
    height: 50px;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 0.5em;
    background-color: #F4F6F8;
    border-radius: 10px;

   svg {
        margin-left: 0.5em;
        cursor: pointer;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`

export const Title = styled.h5`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding: 0 0.3em 0 0;
`;


export const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 1.5em;
  }
`;

export const Column = styled.th`
  color: black;
  width: ${(props) => props.width};
  padding: 0.1rem;
  text-align: left;
`;
