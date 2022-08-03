import styled from "styled-components";


export const Total = styled.td`
  font-weight: bold;
`

export const Styles = styled.div`

 table {
   width: 100%;
   margin: 3em 0 3em;
   border-spacing: 0;
   border-radius: 8px;

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid #F4F6F8;
     text-align: left;
     padding-left: 3em;

     :last-child {
       border-right: 0;
     }

     &:nth-child(4){
       text-align: center;
       padding: 0;
     }

     &:nth-child(3){
      text-align: center;
      padding: 0;
     }

   }
  
   th {
     background: #F4F6F8;
     color: black;
     font-weight: 500;

     :last-child {
        border-radius: 0 8px 8px 0;
     }

     :first-child {
        border-radius: 8px 0 0 8px;
     }
   }
 }
`