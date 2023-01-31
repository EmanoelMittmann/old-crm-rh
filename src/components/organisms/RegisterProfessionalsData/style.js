import styled from "styled-components";
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'


export const ContainerRegisterProfessionalsData = styled.div`
    padding: 0 3em 0 3em;

`;

export const RegisterProfessionalsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BorderTop = styled.div`
  border-top: 1px solid #ccc;
`

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5em;

    &:last-child {
        margin-bottom: 3em;
    }
`
export const ProfessionalData = styled.form`
    display: flex;
    flex-direction: column;
`
export const ContainerEmail = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;

`
export const ProfessionalBank = styled.form`
    display: flex;
    flex-direction: column;
`

export const ContainerRowBank = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 45%;
    margin-bottom: 1.5em;

    &:last-child {
        margin-bottom: 3em;
    }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5em;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 3em;
  }   
`;

export const PhoneInternational = styled(PhoneInput)`

  .form-control{
    width:100%;
    border:1px #cacaca solid;
    height:45px !important;
    border-radius: 8px !important;
    font-size: 0.9rem !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    font-family: 'Poppins',sans-serif !important;
    color: black !important;
  }

  .form-control::placeholder{ 
    color: #cacaca !important;
  }

  .selected-flag{
    border-radius: 8px 0 0 8px !important;
    background-color: white !important;
  }
  .flag-dropdown{
    border-radius: 8px 0 0 8px !important;
  }
`