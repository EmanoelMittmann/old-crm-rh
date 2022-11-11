import styled from 'styled-components';

export const ListHeaderContainer = styled.div`
  max-width: 100%;
  height: 40px;
  background-color: #f4f6f8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;

  svg {
    margin-left: 1em;
    cursor: pointer;
  }
`;

export const ListHeaderTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: black;
  display: flex;
  justify-content:flex-start ;
  margin-left: ${(props) => (props.margin)};
  padding-right: ${props => props.right};
  padding-left: ${props => props.left};
  width: ${(props) => props.width};
`;
