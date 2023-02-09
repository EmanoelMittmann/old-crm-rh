import styled from "styled-components"

export const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .shelf{
        height: 20em;
    }
`

export const Section = styled.section`
  padding: 1.5em 1.5em 0 1.5em;
  width: 91.2%;
  height: 600px;
  min-height: ${(props) => (props.h ? props.h : "0")};
  background-color: white;
  border-radius: 20px;
  margin-bottom: 3em;
`;