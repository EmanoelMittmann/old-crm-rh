import { useEffect, useState } from "react"
import { CompanyField, ContainerFlex, Some } from "../organisms/SelectorNewOs/style"

const OnPrice = ({ professionals, checkedProfissional, companies }) => {
    const [totalPayment, setTotalPayment] = useState({})

    const totalSalaryPayment = () => {
        let companies = {}
        checkedProfissional.map((item) => {
            professionals.find((e) => {
                if (e.id === item.professional_id) {
                    const commissionUser = item.commission ? item.commission : 0
                    const temp = companies[item.companies_id] ?? 0
                    companies[item.companies_id] = e.fixed_payment_value + (temp + commissionUser)

                }
            })
        })
        setTotalPayment(companies)
    }

    useEffect(() => {
        totalSalaryPayment()
    }, [checkedProfissional])


    return (
        <ContainerFlex>
            {Object.entries(totalPayment).map(([company, amount]) => {
                const props = companies.find((c) => c.id === Number(company))
                return <CompanyField>{(props.razao_social).toUpperCase()} <Some> R$ {parseFloat(amount).toFixed(2)}</Some></CompanyField>
            })}
        </ContainerFlex >
    )
}
export default OnPrice;