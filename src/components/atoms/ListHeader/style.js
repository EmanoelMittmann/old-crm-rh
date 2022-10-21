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
  font-weight: 600;
  color: black;
  margin-left: ${(props) => (props.margin ? props.margin : '3em')};
  padding-right: ${props => props.right};
  width: ${(props) => props.width};
  white-space: nowrap;
  cursor: pointer;
`;
