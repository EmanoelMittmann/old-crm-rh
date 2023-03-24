import { useEffect, useState } from "react";
import { ContainerFlex } from "../organisms/SelectorNewOs/style"

const OnPrice = ({ checkedProfissional, professionals }) => {
    const [totalPayment, setTotalPayment] = useState(0)

return (
        <>
   
            <ContainerFlex>
            Valor total:  {totalPayment.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) || 0 }
            </ContainerFlex >

        </>
    )
}
export default OnPrice