import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5em 1.5em 0 1.5em;
  width: 91.5%;
  height: 31em;
  background-color: white;
  border-radius: 20px;
  margin: auto;
  margin-top: 75px;

  @media (min-width: 1000px) {
    width: 91.5%;
  }

  .header{
    width: 25%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 3em;

  .InputBox{
    display: flex;
    gap: 0.5em;
  }
}

  .Box{
    display: flex;
    white-space: nowrap;
    font-weight: bold;
    cursor: pointer;
 
  }
`;

export const ContainerButtonGeral = styled.div`
  width: 91.5%;
  display: flex;
  flex-direction:row;
  margin-left: 1em;
  `;
  

export const ContainerButtonsHeader = styled.div`
  width: 64%;
  display: flex;
  margin: 0.8em 0.5em -3em 2em;

`
export const Title = styled.h3`
  display: flex;
  padding: 1.2em 0em 0em 0em;
`
