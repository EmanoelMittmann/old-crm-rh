import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 590px;
  height: 230px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const ContainerTeam = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    width: 545px;
    margin-left:1.5em;
`
export const ContainerHeader = styled.div`
    display: flex;
    width: 545px;
    border-bottom: 1px solid #CCD1D6;
    margin-left:1.5em;
`

export const ModalTitle = styled.h4`
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    padding: ${(props) => props.padding};
    display: flex;
    align-items: center;
    padding: 1em 0 1em 0 ;
`;

export const JobReports = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    margin: -1.3em 0 1.5em 0;
    color: #5A646E;
    align-items: center;`

export const TitleBank = styled.h5`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 1em 0 1em 0;

`;
export const TitleAgenc = styled.h5`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 1em 0 1em 0;
    margin-left: 5em;

`;
export const TitleBankC = styled.h5`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
   padding: 1em 0 1em 0 ;
   margin-right:9em;
`;
export const DateBank = styled.div`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #5A646E;
    padding: 0em 0 1em 0 ;
    margin-top:-1em;
    
    

`;
export const DateAgenc = styled.div`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #5A646E;
     padding: 0em 0 1em 0 ;
    margin-top:-1em;
    margin-left:-5.5em;
   

`;
export const DateBankC = styled.div`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #5A646E;
     padding: 0em 0 1em 0 ;
    margin-top:-1em;
    margin-right:6.3em;
`;

export const TitleChavePIX = styled.h5`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 1em 0 1em 0;

`;
export const TitlePIX = styled.h5`
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 1em 0 1em 0;
    margin-right:20em;
`;
export const DatePIX = styled.div`
     font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #5A646E;
     padding: 0em 0 1em 0 ;
    margin-top:-1em;
    margin-right:12em;
`;