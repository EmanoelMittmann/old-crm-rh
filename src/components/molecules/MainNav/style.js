import styled from 'styled-components';

export const Nav = styled.nav`
    width: 75vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   position: relative;  

`
export const ActiveIconContainer = styled.div`
   width: 6.5%;
`

export const ActiveIcon = styled.div`
   position:absolute;
   top: 90%;
   width: 55px;
   height: 6px;
   border-radius: 8px 8px 0 0;
   background-color: #407BFF;
`