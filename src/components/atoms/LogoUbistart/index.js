import React from 'react'
import LogoImg from '../../../assets/Logo.svg'
import Logo from '../LogoUbistart/style'

const LogoUbistart = (props) => {
    
    return (
            <Logo src={LogoImg} alt="Logo ubistart" width={props.width} margin={props.margin}/>
    )
}
export default LogoUbistart;


