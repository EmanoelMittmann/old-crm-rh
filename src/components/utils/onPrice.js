import { useEffect, useState } from "react"
import { CompanyField, ContainerFlex, Some } from "../organisms/SelectorNewOs/style"

const OnPrice = ({ professionals, checkedProfissional, companies }) => {
    const [totalPayment, setTotalPayment] = useState({})
    
    const totalSalaryPayment = () => {
        let companies = {}
        checkedProfissional.map((item) => {
            professionals.find((e) => {
                if (e.id === item.professional_id) {
                    const hourQuantity = e?.extrahour_release
                    .map((prop) => prop.hour_quantity)
                    .reduce((acc, cc) => acc + cc, 0);

                    const commissionUser = item.commission ? item.commission : 0

                    const temp = companies[item.companies_id] ?? 0
                    const payment =( e.fixed_payment_value + (hourQuantity * e.extra_hour_value) + (temp + commissionUser))

                    companies[item.companies_id] = payment
                    
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