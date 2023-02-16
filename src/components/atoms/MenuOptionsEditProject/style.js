import styled from 'styled-components';

export const MenuOptionsContainer = styled.div`
  position: absolute;
  left: 93%;
`;

export const OptionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -100px;
  top: ${(props) => props.positionMenu};
  width: 100px;
  height: 33px;
  border-radius: 8px;
  background-color: white;
  z-index: 5;
  box-shadow: 0px 1px 32px #919eab66;
`;
export const OptionsMenuItem = styled.button`
  display: block;

  width: 100%;
  text-align: left;
  background-color: transparent;
  padding: ${(props) => props.padding};
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.98rem;
  font-weight: 500;
  color: black;
  cursor: pointer;

  &:hover {
    backdrop-filter: brightness(0.98);
  }
`;
