import styled from "styled-components"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'

export const Phone = styled(PhoneInput)`
  width: ${props => props.width};


  .form-control{
    width:100%;
    border:${props => props.errors ? '1px solid red ': '1px solid #cacaca'};
    height:44px !important;
    font-size: 0.9rem !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    font-family: 'Poppins',sans-serif !important;
    color: black !important;
  }

  .selected-flag{
    outline: ${props => props.errors ? '1px solid red ': '1px solid #cacaca'};
    background-color: white !important;
  }

`

export const Father = styled.div`
    display: flex;
    flex-direction: column;
`