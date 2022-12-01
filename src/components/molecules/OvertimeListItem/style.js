import styled from "styled-components"

export const Main = styled.div`
    display: grid;
    grid-template-columns: .5fr 1fr 2fr 1fr;
    padding-left: 3.3em;
    width: 100%;
    height: 50px;
    align-items: center;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const StatusHoursExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 30px;
  background-color:${props => props.bg};
  color:${props => props.text};
  border-radius: 40px;
  font-weight: 700;
`