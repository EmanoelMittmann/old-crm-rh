import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5em 1.5em 0 1.5em;
  width: 91.2%;
  height: 30em;
  background-color: white;
  border-radius: 20px;
  margin: auto;
  margin-top: 40px;

  @media (min-width: 1000px) {
    width: 95%;
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

export const ContainerButtons = styled.div`
  width: 31%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top:1em;
  margin-bottom: ${props => props.bottom};
  
`

export const ScrollContainer = styled.ul`
  overflow-y: scroll;
  height: 50%;
  width: 100%;
  margin-bottom: 0.5em;
  border-bottom: 1px solid #ccc;
  
  
  &::-webkit-scrollbar{
    width: 6px;
  }

  &::-webkit-scrollbar-track{
    background-color: #eee;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb{
    border-radius: 20px;
    border: 3px solid #ddd;
    background-color: #ddd;
  }
`

export const ContainerIconModal = styled.div`
  cursor: pointer;
  padding: 1.1em 0em 0em 1.8em;
  display: flex;

`

export const TitleOS = styled.h3`
  display: flex;
  padding: 1.2em 0em 0em 0em;
`

export const ContainerButtonsHeader = styled.div`
  width: 64%;
  display: flex;
  margin: 0.8em 1em -3em 2em;

`
export const ContainerButtonGeral = styled.div`
  width: 100%;
  display: flex;
  flex-direction:row;

`
export const ContainerFlex = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  white-space: nowrap;
  align-items: end;

    .price{
        display: flex;
        align-items: center;
    }
`

export const CompanyField = styled.div`
    width: 290px;
    padding: 0.3em 0 0.5em 0;
    display: flex;
    align-items: end;
    justify-content: end;
    font-size: 13px;
    font-weight: 500;
`
export const Some = styled.span`
    width: 100%;
    padding: 0em 0.5em 0 0em;
    display: flex;
    align-items: end;
    justify-content: end;
    font-size: 14px;
    font-weight: 300;
`

export const ContainerFlexLoanding = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 0;
  margin-top: 1.3em;
  margin-left: 3em;
  width: 25%;
`

