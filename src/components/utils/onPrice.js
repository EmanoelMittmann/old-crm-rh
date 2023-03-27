import { useEffect, useState } from "react"
import { ContainerFlex } from "../organisms/SelectorNewOs/style"

const OnPrice = ({ professionals, checkedProfissional,companies }) => {
    
    
    const [totalPayment, setTotalPayment] = useState({})
    
    const totalSalaryPayment = () => {
    let companies = {}
        checkedProfissional.map((item)=>{
            professionals.find((e)=>{
               if(e.id === item.professional_id) 
                {
                    const temp = companies[item.companies_id] ?? 0
                    companies[item.companies_id] = e.fixed_payment_value + temp
                }
            })
        })
        
        setTotalPayment(companies)
    
    }
    console.log(totalPayment);
    useEffect(() => {
        totalSalaryPayment()
    },[checkedProfissional])

        return (

                <ContainerFlex>
                    {Object.entries(totalPayment).map(([key,value])=>{
                        const props = companies.find((c)=> c.id === Number(key))
                        return <p>Valor total {props.razao_social} : {value}</p>
                    })}    
                </ContainerFlex >
  
        )
        
    
   
}
export default OnPrice