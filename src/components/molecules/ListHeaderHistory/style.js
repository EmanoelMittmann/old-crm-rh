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
        cursor: pointer;
  }
  @media screen and (min-width: 640px) and (max-width: 1024px) {
    width: 100%;
  }

`;

export const Title = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`;


export const Styles = styled.div`
  table {
    display: flex;
    width: 100%;
    border-spacing: 1.2em;
 
  }
`;

export const Column = styled.th`
  color: black;
  width: ${(props) => props.width};
  text-align: left;
  cursor: pointer;
`;
